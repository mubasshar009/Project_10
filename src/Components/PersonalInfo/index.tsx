import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { Props } from '../Stepper';

const PersonalInfo = (props:Props) => {
  const { submit, setValues,preValue} = props;
  return (
    <Formik
      initialValues={preValue}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values) => {
        
        submit(1)
        setValues({
          ...preValue,
          ...values
        })
      }}
    >
      <Form>
        <div className='Parent'>
          <h1>Personal Info</h1>
          <div className='1stChild'>
          
            <Field as={TextField} variant="outlined" label="First Name" name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </div>

          <div className='2ndChild'>
            <Field as={TextField} variant="outlined" label="Last Name" name="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </div>
          <div className='3rdChild'>
            <Field as={TextField} variant="outlined" label="Email" name="email" type="email" />
            <ErrorMessage name="email" />
          <div>
            <Button variant='outlined' type="submit">Submit</Button>
          </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default PersonalInfo;