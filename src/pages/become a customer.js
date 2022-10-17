import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import flowchart from '../components/misc_imgs/customers.png';
import ShopBy from "../components/shop by";
import truck_img from '../components/misc_imgs/suppliers.jpg';
import './Signin.css';



const BAC = () => {

    const styleObj = {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    }


    return (
        <div>
        
    <div style={{backgroundColor: "black", color: "white"}}>
    <ShopBy bg="orangered" txt="white"/>
    <br/><br/><br/><br/>

        
        <Container>
        <div className='row'>
            <div className='col left'>
                    <text className="bod">
                        Get access to our network of suppliers from anywhere in South Africa. 
                        Choose from a wide range of construction materials that suit your project needs. 
                        We negotiate the best prices on your behalf, saving you costs and time and improving cashflows.
                        <br/><br/>
                        Make secure payments and track your orders right down to the point of delivery. 
                        You can also view your order history and have access to your digital receipts at any 
                        time. 
                    </text>
                </div>


                    <img style={{height:280, width:350}} src={truck_img}/>

        </div>
       
       </Container>
    <br/><br/><br/><br/><br/><br/>
    </div>

    <Container>
    <br/><br/>
       <img src={flowchart} alt={"Become a Customer diagram"}/>
    </Container>
    
        <br/><br/>
        
        <div class="text-center">
            <Link to="/signin">
                <Button style={{fontWeight:"bold", background: 'orangered', border: '1px solid #efffff',}} renderAs="button">
                    Log In
                </Button>
            </Link>

            <Link to="/signup">
                <Button style={{fontWeight:"bold", background: 'orangered', border: '1px solid #efffff',}} renderAs="button">
                    Sign Up
                </Button>
            </Link>
            </div>
            <br/><br/><br/><br/>
        </div>
    );
};

export default BAC;