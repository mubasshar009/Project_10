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
                    .max(1000000000000,"Invalid Format")
                    .min(100000000000,"Should be 12 Characters")
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
                        <ErrorMessage className='Error' name="cardType">{msg => <div className='Error'>{msg}</div>}</ErrorMessage>
                    </div>

                    <div className='Child'>
                        <Field as={TextField} variant="outlined" label="Card Number" name="cardNumber" type="number" />
                        <ErrorMessage className='Error' name="cardNumber">{msg => <div className='Error'>{msg}</div>}</ErrorMessage>
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