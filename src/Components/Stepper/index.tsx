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
export type InitialValueType = {
  firstName?:string,lastName?:string,email?:string,cardType?:string,cardNumber?:string
}
export type ReviewTypes = {
  submit:React.Dispatch<React.SetStateAction<number>>,
  values:InitialValueType
}
export type Props = {
  submit:React.Dispatch<React.SetStateAction<number>>
  setValues:React.Dispatch<React.SetStateAction<InitialValueType>>
  preValue:InitialValueType
}


const getStepsContent = (step:number,
  setActiveStep:React.Dispatch<React.SetStateAction<number>>,
  setValues:React.Dispatch<React.SetStateAction<InitialValueType>>,
  Values:InitialValueType
  
  ) => {
    switch(step){
        case 0:
            return <PersonalInfo submit={setActiveStep} preValue={Values} setValues={setValues}/>
        case 1:
            return <Payment submit={setActiveStep} preValue={Values} setValues={setValues}/>
        case 2:
            return <Review submit={setActiveStep} Values={Values}/>
        default:
            return "Unknown Values"
    }
}
const InitialVal:InitialValueType = {
  firstName:'',
  lastName:'',
  email:'',
  cardType:'',
  cardNumber:'',
}
export default function HorizontalLabelPositionBelowStepper() {
    const [activeStep,setActiveStep ] = React.useState(0)
    const [Values,setValues] = React.useState(InitialVal)
    
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
          getStepsContent(activeStep,setActiveStep,setValues,Values)
      }
    </Box>
  );
}