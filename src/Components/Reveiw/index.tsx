import { InitialValueType } from "../Stepper";
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button'
const Review = (props:{submit:React.Dispatch<React.SetStateAction<number>>,Values:InitialValueType}) => {
    const { submit,Values} = props;
    return (
        <div>
            <h1>Verify And Place Order</h1>
            <h2>First Name = {Values.firstName}</h2>
            <h2>Last Name = {Values.lastName}</h2>
            <h2>Email = {Values.email}</h2>
            <h3>Card Type = {Values.cardType}</h3>
            <h3>Card Number = {Values.cardNumber}</h3>
            <div>
                <Button style={{marginRight:'10px',}} variant="outlined"  onClick={() => submit(1)}>Back</Button>
                <Button variant="outlined">
                <Link style={{textDecoration:'none'}} to="/success">Confirm</Link></Button>
            </div>
        </div>
    )
}

export default Review
