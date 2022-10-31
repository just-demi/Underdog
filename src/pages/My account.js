import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyAccount = () => {
    return (
        <div>
        <br/><br/>
        <h1 class="text-center" style={{color: "orangered"}}>My account</h1>
            <Link to="/order_history">
                <Button style={{background:"orangered" , border: '1px solid #efffff',}} renderAs="button">
                    <span>View Order History</span>
                </Button>
            </Link>
        <br/><br/><br/><br/>
        </div>
    );
};

export default MyAccount;