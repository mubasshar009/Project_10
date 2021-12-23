import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PersonalInfo from '../PersonalInfo';
import Payment from '../Payment';
import Review from '../Reveiw';

const steps = [
  'Personal Information',
  'Payment',
  'Review',
];

const getStepsContent = (step:number) => {
    switch(step){
        case 0:
            return <PersonalInfo />
        case 1:
            return <Payment />
        case 2:
            return <Review />
        default:
            return "Unknown Values"
    }
}

export default function HorizontalLabelPositionBelowStepper() {
    const [activeStep,setActiveStep ] = React.useState(0)

    return (
    <Box sx={{marginTop:"20px", boxShadow:1,width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
          getStepsContent(activeStep)
      }
    </Box>
  );
}