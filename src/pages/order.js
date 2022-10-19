import React from "react";
import {Container} from 'react-bootstrap'
import cement from '../components/misc_imgs/romance.png';
import Cartcard from "../components/card/cart card";
import { useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ShopBy from "../components/shop by";


const Order_page = () => {

const { items} = useCart();

var cart_items = null

if(items.length>0){
    cart_items = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product">
          {<Cartcard product={prod} img={cement} />} 
          <br/>
        </div>
      ))}
      </div>
}
else{
    cart_items = <div>
        <h1>You have no items in the cart</h1>
    </div>
}


    return (
        <body>
        <div style={{ backgroundColor: "#fafafa"}}>

        <div style={{backgroundColor: "orangered", height:"30vh"}}>
        <ShopBy bg="white" txt="orangered"/> <br/><br/>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h2 style={{color:"white", fontWeight:"bold"}}>Please Confirm items in your Order</h2>
        </div>
        </div>

        <h1 class="text-center" style={{color: "orangered"}}>Order</h1>
        <Container>
       {cart_items}
       
       <Link to="/checkout">
                <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Go to Checkout</span>
                </Button>
        </Link>
       </Container>
       <br/><br/><br/><br/>
       
        </div>
        </body>
    );
};

export default Order_page;