import { InitialValueType } from "../Stepper";
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button'
const Review = (props: { submit: React.Dispatch<React.SetStateAction<number>>, Values: InitialValueType }) => {
    const { submit, Values } = props;
    return (
        <div className="parentReview">
            <div className="childReview">
                <h1>Verify And Place Order</h1>
                <p>First Name = {Values.firstName}</p>
                <p>Last Name = {Values.lastName}</p>
                <p>Email = {Values.email}</p>
                <p>Card Type = {Values.cardType}</p>
                <p>Card Number = {Values.cardNumber}</p>
                <div>
                    <Button style={{ marginRight: '10px', }} variant="outlined" onClick={() => submit(1)}>Back</Button>
                    <Button variant="outlined">
                        <Link style={{ textDecoration: 'none' }} to="/success">Confirm</Link></Button>
                </div>
            </div>
            

        </div>
    )
}

export default Review
