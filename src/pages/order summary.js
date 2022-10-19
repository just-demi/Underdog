import React from "react";
import ShopBy from "../components/shop by";



const OrderSummary = () => {
    return (
        <div style={{backgroundColor:"#f5f5f5"}}>
        
            <div style={{backgroundColor: "black"}}>
                <ShopBy />
                <br/><br/>
            </div>

            <h1 class="text-center" style={{color: "#379069"}}>Orders</h1>
            
        <br/><br/><br/>
        </div>
    );
};

/*const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '280px',
  	display: 'block',
    color: 'black',
};*/

export default OrderSummary;