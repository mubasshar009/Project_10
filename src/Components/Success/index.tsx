import { Link } from "react-router-dom"
import { Button } from "@mui/material"
const Success = () => {
    return (
        <div className="success">
            <h1>Success</h1>
            <p>Your order has been placed.Thanks for Buying</p>
            <Button style={{margin:'15px'}} variant="outlined">
                <Link style={{textDecoration:'none'}} to="/">Back To Home</Link>
            </Button>
        </div>
    )
}

export default Success
