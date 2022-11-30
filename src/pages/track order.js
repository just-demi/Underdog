import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TrackOrder = () => {
    return (
        <div>
        <br/><br/>
        <h1 class="text-center" style={{color: "#379069"}}>Track your orders on this page</h1>
            <Link to="/order_history">
                <Button style={{background:"#379069" , border: '1px solid #efffff',}} renderAs="button">
                    <span>View Order History</span>
                </Button>
            </Link>
        <br/><br/><br/><br/>
        </div>
    );
};

export default TrackOrder;