import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import flowchart from '../components/misc_imgs/suppliers.png';
import './Signin.css';
import truck_img from '../components/misc_imgs/customers.jpg';
import ShopBy from '../components/shop by';



const BAS = () => {


    const styleObj = {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    }


    return (
        <div >
        
    <div style={{backgroundColor: "black", color: "white"}}>
    <ShopBy bg="orangered" txt="white"/>
    <br/><br/><br/><br/><br/>
        <Container>
        <div className='row'>
            <div className='col left'>
                    <text className="bod">
                    Connecting you to your customer and giving you access to markets previously not within your reach. 
                    From your sales desk, get in touch with the contractor and supply directly to them. <br/><br/>
                    Through Coefficiency’s e-commerce marketplace you can adequately supply the customer with the 
                    correct quantity and quality, thus creating a more efficient warehousing system.
    
                    </text>
                    </div>


                    <img style={{height:240, width:360}} src={truck_img}/>
                
                </div>
                <br/><br/><br/><br/><br/><br/><br/>
       </Container>
        </div>
            <Container>
            <br/><br/>
                <img src={flowchart} alt={"Become a supplier diagram"}/>

                <br/><br/><br/><br/>
            </Container>
        

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

export default BAS;