import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ShopBy from "../components/shop by";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signin.css";


const Contact = () => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
        <div style={{backgroundColor: "orangered"}}>
            <div style={{backgroundColor: "orangered"}}>
                <ShopBy bg="white" txt="orangered"/> <br/><br/>
                <h1 class='text-center' style={{color:"white"}}>Let's Chat</h1>
            </div>

            <br/>

        <Container>
            
            <Form style={formStyle} onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <h5>Phone</h5> 
                            123-456-789
                        </Col>
                        <Col>
                            <h5>Email</h5>
                            coefficiency@gmail.com
                        </Col>
                        <Col>
                            <h5>Social Media</h5>
                            Twitter: @coefficiency
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col>
                            <Form.Group size="lg" controlId="text">
                            <Form.Label style={labelStyle}>First Name</Form.Label>
                            <Form.Control
                                style={inputStyle}
                                type="text"
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group size="lg" controlId="text">
                            <Form.Label style={labelStyle}>Last Name</Form.Label>
                            <Form.Control
                                style={inputStyle}
                                type="text"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                            </Form.Group>
                        </Col>

                        <Col>
                            <Form.Group size="lg" controlId="email">
                            <Form.Label style={labelStyle}>Email *</Form.Label>
                            <Form.Control
                                style={inputStyle}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Group size="lg" controlId="text">
                        <Form.Label style={labelStyle}>Message</Form.Label>
                        <Form.Control
                            style={inputStyle2}
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        </Form.Group>
                    </Row>

                    <Row> 
                        <div style={{display: "flex" }}>
                        <Button style={submitStyle} id="contact" block size="lg" type="submit">
                            Send
                        </Button>
                        </div>
                    </Row>

                </Container>
            </Form>

        </Container>
        <br/><br/><br/><br/>
        </div>
    );
};

const formStyle = {
    margin: 'auto',
    padding: '45px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    width: '100%',
  	display: 'block',
    backgroundColor: '#9D978F',
    color: 'white',
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '20px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '80%',
    backgroundColor: '#9D978F',
    borderColor: 'white',
    color: 'white',
};

const inputStyle2 = {
    margin: '5px 0 10px 0',
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '93.7%',
    height: '100px',
    backgroundColor: '#9D978F',
    borderColor: 'white',
    color: 'white',
    paddingTop: '0',
    paddingBottom: '0',
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    fontSize: '15px',
    color: 'white',
    display: 'block',
    width: '200px',
    right: '100px',
    marginLeft: "auto",
};

export default Contact;