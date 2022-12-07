import React from "react";
import {Container, Row} from 'react-bootstrap'
import cement from '../components/misc_imgs/romance.png';
import Cartcard from "../components/card/cart card";
import { useCart } from "react-use-cart";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ShopBy from "../components/shop by";
import "./Signin.css";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

const Order_page = () => {

const { items,cartTotal } = useCart();

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

let total = cartTotal + (cartTotal*0.15);


    return (
        
        <body>
        <div style={{ backgroundColor: "#f1f1f1"}}>

            <div style={{backgroundColor: "#379069"}}>
                <ShopBy bg="white" txt="orangered"/> <br/><br/>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <h2 style={{color:"white", fontWeight:"bold"}}>Please Confirm items in your Order</h2>
                    </div>
            </div>

        <h1 class="text-center" style={{color: "#379069"}}>Shopping Cart</h1>
        
       
       
       
       
       <Container>
        <div className='row'>
            <div className='col left'>

            <Container >
            {cart_items}
            </Container> <br/><br/>

            <div class="text-center">
            <Link to="/product_page">
                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Back to Shopping</span>
                </Button>
            </Link>

                <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Clear Cart</span>
                </Button>
            </div>

        </div>

        <div className="col right">
            <Container style={formStyle2}>

            <h2>{"Cart Summary"}</h2>
            
                <Row>
                    <div className="col left">
                    {"Total cost (VAT excl.): " } <br/>
                    <b>{"Total (VAT incl.):"}</b>
                    </div>
                    <div className="col right">
                    {formatMoney(cartTotal)} <br/>
                    <b>{formatMoney(total)}</b>
                    </div>
                </Row>
            <br/><br/>
            
            <h2>{"Make Payments"}</h2>
                    <Link to="/track_order">
                        <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Pay with Credit/Cheque Card</span>
                    </Button>
                </Link>

                <br/>

                <Link to="/track_order">
                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Pay by EFT</span>
                    </Button>
                </Link>

                <br/>

                <Link to="/track_order">
                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Apply for Credit</span>
                    </Button>
                </Link>

            </Container>
        </div>


            </div>
            </Container>
            <br/><br/><br/>

       


        </div>
        </body>
    );
};



const formStyle2 = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'white',
    width: '350px',
  	display: 'block',
    color: 'black',
};

export default Order_page;