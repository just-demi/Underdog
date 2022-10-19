import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signin.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifypassword, setVerifypassword] = useState("");
  
  const navigate = useNavigate();

  function validateForm() {
    return (email.length > 0) && (password.length > 0) && (verifypassword.length > 0) ;
  }

  function validatePassword() {
    return (password === verifypassword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const obj = {email: email, password: password, userType: 'customer'};
    console.log(JSON.stringify(obj));

    axios.post('http://localhost:3001/register', obj)
            .then(res => {console.log("it works" + res.status)
            navigate('/signin')
          })
            .catch(err => {
                console.log(err.response.data.msg);
                if(err.response.status === 400){
                alert(err.response.data.msg)}
            });
  }

  return (
    <div className="Signin">
      <Form style={formStyle} method='POST' action='/register' onSubmit={handleSubmit}>


        <Form.Group size="lg" controlId="email">
          <Form.Label style={labelStyle}>Username:</Form.Label>
          <Form.Control
            style={inputStyle}
            placeholder="Enter your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label style={labelStyle}>Create password:</Form.Label>
          <Form.Control
            style={inputStyle}
            placeholder="Input more than 6 characters"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label style={labelStyle}>Confirm Password:</Form.Label>
          <Form.Control
            style={inputStyle}
            placeholder="Passwords should match"
            type="password"
            value={verifypassword}
            onChange={(e) => setVerifypassword(e.target.value)}
          />
        
      
        </Form.Group>


        <Button id="work" block size="lg" type="submit" disabled={!(validateForm() && validatePassword())}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '400px',
  	display: 'block'
};
/*const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: 'orangered',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};*/
const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '20px',
};