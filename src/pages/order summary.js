import React from "react";
import {Container,} from 'react-bootstrap';
import ShopBy from "../components/shop by";



const OrderSummary = () => {
    return (
        <div>
        <br/><br/>

        <div style={{backgroundColor: "orangered", height:"25vh"}}>
        <ShopBy/>
        </div>
        <br/><br/><br/><br/>
        </div>
    );
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '280px',
  	display: 'block',
    color: 'black',
};

export default OrderSummary;