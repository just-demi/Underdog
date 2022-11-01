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
                    <Link to="/order_history">
                        <Button style={{background:"#379069" , border: '1px solid #efffff',}} renderAs="button">
                            <span>View Order History</span>
                        </Button>
                    </Link>
                <br/><br/>
            <div className="container">
                <div className='row'>

                    <div className='col'>
                        <Container style={formStyle2}>
                            <h4>{"Orders"}</h4>
            
                                <Row>
                                    <div className="col left">
                                        {"Total cost (VAT excl.): " } <br/>
                                        <b>{"Total (VAT incl.):"}</b>
                                    </div>
                                    <div className="col right">
                                        {formatMoney(35762)} <br/>
                                        <b>{formatMoney(234)}</b>
                                    </div>
                                </Row>

                                <br/><br/>

                                <Link to="/track_order">
                                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                                        <span>Pay by EFT</span>
                                    </Button>
                                </Link>

                        </Container>
                    </div>

                    <div className='col'>
                        <Container style={formStyle2}>
                            <h4>{"Payments & Credit"}</h4>
            
                                <Row>
                                    <div className="col left">
                                        {"Total cost (VAT excl.): " } <br/>
                                        <b>{"Total (VAT incl.):"}</b>
                                    </div>
                                    <div className="col right">
                                        {formatMoney(35762)} <br/>
                                        <b>{formatMoney(234)}</b>
                                    </div>
                                </Row>

                                <br/><br/>

                                <Link to="/track_order">
                                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                                        <span>Pay by Cash</span>
                                    </Button>
                                </Link>

                        </Container>
                    </div>
                    
                    <div className="col">
                        <Container style={formStyle2}>

                            <h4>{"Customer Information"}</h4>
                                <Row>
                                    <div className="col left">
                                        {"Total cost (VAT excl.): " } <br/>
                                        <b>{"Total (VAT incl.):"}</b>
                                    </div>
                                    <div className="col right">
                                        {formatMoney(35762)} <br/>
                                        <b>{formatMoney(234)}</b>
                                    </div>
                                </Row>

                                <br/><br/>
                    
                                <Link to="/track_order">
                                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                                    <span>Pay with Credit/Cheque Card</span>
                                    </Button>
                                </Link>
                        </Container>
                    </div>

                <div className='row'>
                    
                    <div className="col">
                        <Container style={formStyle2}>

                            <h4>{"My Lists"}</h4>
                                <Row>
                                    <div className="col left">
                                        {"Total cost (VAT excl.): " } <br/>
                                        <b>{"Total (VAT incl.):"}</b>
                                    </div>
                                    <div className="col right">
                                        {formatMoney(35762)} <br/>
                                        <b>{formatMoney(234)}</b>
                                    </div>
                                </Row>

                                <br/><br/>
                    
                                <Link to="/track_order">
                                    <Button style={{background: '#379069', border: '1px solid #efffff',}}  renderAs="button">
                                    <span>Pay with Cheque</span>
                                    </Button>
                                </Link>
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
    width: '350px',
  	display: 'block',
    color: 'black',
};