import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {Container,Row} from 'react-bootstrap';

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

const MyAccount = () => {
    return (
        <div style={{backgroundColor: "#f1f1f1"}}>
            <Container>
                <br/><br/>
                <h1 style={{color: "#379069"}}>My account</h1>
                <br/><br/>

            <div className="container">
                <div className='row'>

                    <div className='col'>
                        <Container style={formStyle2}>
                            <h4>{"Orders"}</h4>            
                                <Row>
                                    <Link to="/order_history">orders</Link>
                                </Row>            
                                <Row>
                                    <Link to="#">invoices</Link>
                                </Row>            
                                <Row>
                                    <Link to="#">returns</Link>
                                </Row>            
                                <Row>
                                    <Link to="#">product reviews</Link>
                                </Row>
                            <br/><br/>
                        </Container>
                    </div>

                    <div className='col'>
                        <Container style={formStyle2}>
                            <h4>{"Payments & Credit"}</h4>
                                <Row>
                                        <Link to="#">Credrits and Refunds</Link>
                                    </Row>            
                                    <Row>
                                        <Link to="#">Redeem Gift Vouchers</Link>
                                    </Row>   
                                <br/><br/>

                        </Container>
                    </div>
                    
                    <div className="col">
                        <Container style={formStyle2}>
                            <h4>{"Customer Information"}</h4>
                                <Row>
                                        <Link to="#">Personal Details</Link>
                                    </Row>            
                                    <Row>
                                        <Link to="#">Address</Link>
                                    </Row>
                            <br/><br/>
                        </Container>
                    </div>

                <div className='row'>
                    
                    <div className="col">
                        <Container style={formStyle2}>

                            <h4>{"My Lists"}</h4>
                                <Row>
                                        <Link to="#">My Lists</Link>
                                    </Row>            
                                    <Row>
                                        <Link to="#">Create a List</Link>
                                    </Row>
                            <br/><br/>
                        </Container>
                    </div>
                </div>

                </div>

                <br/><br/>
            </div>
            </Container>
        </div>
    );
};

export default MyAccount;

const formStyle2 = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'white',
    width: '22rem',
  	display: 'block',
    color: 'black',
    height: '10rem'
};