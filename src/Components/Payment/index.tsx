import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { Props } from '../Stepper';

const Payment = ({ submit,setValues ,preValue}: Props) => {
    return (
        <Formik
            initialValues={preValue}
            validationSchema={Yup.object({
                cardType: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                cardNumber: Yup.number()
                    .min(6,'Minimum 6 Characters')
                    .required('Required'),

            })}
            onSubmit={(values) => {
                submit(2)
                setValues({
                    ...preValue,
                    cardType:values.cardType,
                    cardNumber:values.cardNumber
                })
            
            }}
        >
            <Form>
                <div className='Parent'>
                    <h1>Payment Details</h1>
                    <div className='Child'>

                        <Field as={TextField} variant="outlined" label="Card Type" name="cardType" type="text" />
                        <ErrorMessage name="cardType" />
                    </div>

                    <div className='Child'>
                        <Field as={TextField} variant="outlined" label="Card Number" name="cardNumber" type="string" />
                        <ErrorMessage name="cardNumber" />
                    </div>
                    <div className='Child' style={{padding:'10px'}}>
                    <Button variant='outlined' onClick={() => submit(0)}>Back</Button>
                        <Button style={{marginLeft:'5px'}} variant='outlined' type="submit">Submit</Button>
                        
                        
                    </div>
                </div>

            </Form>
        </Formik >
    );
};
export default Payment;