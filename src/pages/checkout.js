import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShopBy from "../components/shop by";
import "./Signin.css";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

const Checkout = () => {

    const { items,cartTotal } = useCart();
    /*var cart_items = null;
    var cart_quantity = null;
    var cart_prices = null;
    var total = null;*/
    var test = null;
    var delivery = null;

if(items.length>0){
    test = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product">
        <Row>
            <Col>
          <h6>{prod.name}</h6> 
            </Col>

            <Col>
            <div className="basket-product"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h6>{formatMoney(prod.price)} </h6>
        </div>
            </Col>

            <Col>
            <div className="basket-product"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h6>{prod.quantity}</h6>
        </div>
            </Col>

            <Col>
            <div className="basket-product">
        <h6>{formatMoney(prod.quantity*prod.price)} </h6>
        </div>
            </Col>
        </Row>
        </div>
      ))}
      </div>

    delivery = <div>
        <Row>
        <Col>
            <h6>Delivery</h6>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col><h6>{formatMoney(250)}</h6></Col>
        </Row>
    </div>


    /*cart_items = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product">
          <h6>{prod.name}</h6> 
        </div>
      ))}
      </div>

      cart_prices = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h6>{formatMoney(prod.price)} </h6>
        </div>
      ))}
      </div>

    cart_quantity = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <h6>{prod.quantity}</h6>
        </div>
      ))}
      </div>

    total = <div>{items.map(prod => (
        <div key={prod.id} className="basket-product">
        <h6>{formatMoney(prod.quantity*prod.price)} </h6>
        </div>
    ))}
    </div>*/
}
else{
    test = <div>
        <h1>You have no items in the cart</h1>
    </div>
}

var savings = cartTotal*0.15;
var cc = savings*0.25;
var total_exc = cartTotal-savings+cc;
var vat = total_exc*0.15;
var total_inc = vat+total_exc;


    return (
    <div >
        
        <div style={{backgroundColor: "orangered"}}>
            <ShopBy bg="white" txt="orangered"/> <br/><br/>
            <h1 class="text-center" style={{color:"white"}}>Your order is almost complete</h1>
            <br/>
        </div>

        <Container>
        <div className='row'>
            <div className='col left'>

            <Container style={formStyle}>
                <h2 class="text-center">{"Quote"}</h2>
                    <Row>

                        <Col>
                            <h3>
                                Description
                            </h3>
                        </Col>

                        <Col>
                            <h3 class='text-center'>
                                Quantity
                            </h3>
                        </Col>
                        
                        <Col>
                            <h3 class='text-center'>
                                Unit Price
                            </h3>
                        </Col>
                        
                        <Col>
                            <h3>
                                Total
                            </h3>
                        </Col>
                    </Row>
                    {test}
                    {delivery}

                    <Row style={{border: '1px solid #c9c9c9',}}>
                        <Col>
                        <h6>
                        Total Cost VAT Exclusive:
                        </h6>
                        </Col>

                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <h6>{formatMoney(cartTotal)}</h6>
                        </Col>
                    </Row>
            </Container> <br/><br/>

            <div class="text-center">
            <Link to="/order_page">
                    <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Edit my Order</span>
                </Button>
            </Link>

                <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Cancel Order</span>
                </Button>
            </div>

        </div>

        <div className="col right">
            <Container style={formStyle2}>

            <h2>{"Payment Due"}</h2>
            
                <Row>
                    <div className="col left">
                    {"Total cost (VAT excl.): " } <br/>
                    {"Savings for you:"} <br/>
                    {"Coefficiency commission:"} <br/>
                    <b>{"Total (VAT excl.): "}</b> <br/>
                    {"Input VAT at 15%:"} <br/>
                    <b>{"Total (VAT incl.):"}</b>
                    </div>
                    <div className="col right">
                    {formatMoney(cartTotal)} <br/>
                    {"-"+formatMoney(savings)} <br/>
                    {"+"+formatMoney(cc)} <br/><br/>
                    <b>{formatMoney(total_exc)}</b><br/>
                    {formatMoney(vat)} <br/>
                    <b>{formatMoney(total_inc)}</b>
                    </div>
                </Row>
            <br/><br/>
            
            <h2>{"Make Payments"}</h2>
                    <Link to="/track_order">
                        <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Pay with Credit/Cheque Card</span>
                    </Button>
                </Link>

                <br/>

                <Link to="/track_order">
                    <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Pay by EFT</span>
                    </Button>
                </Link>

                <br/>

                <Link to="/track_order">
                    <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                        <span>Apply for Credit</span>
                    </Button>
                </Link>

            </Container>
        </div>


            </div>
            </Container>
            <br/><br/><br/>

       
        </div>
    );
};

const formStyle = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '700px',
  	display: 'block',
    color: 'black',
};

const formStyle2 = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '350px',
  	display: 'block',
    color: 'black',
};

export default Checkout;