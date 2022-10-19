import React, { useState }  from "react";
import {Row,Col, Container} from 'react-bootstrap';
import './Signin.css';
import { Button } from "react-bootstrap";
import b from '../components/misc_imgs/j.png';
import ShopBy from '../components/shop by';


const About = () => {

    const gcolor={
        color: "black",
    }

   
    const [readMoreD,setReadMoreD]=useState(false);


   

  
 

    const extraContentD = <div >
    <text className="aboutusbod2"> 
            He is a recent graduate with a passion for software development, machine learning and big data. 
            He holds 2 qualifications from the University of the Witwatersrand which include a Bachelor of Science 
            with a major in computer science and a honors degree in Big Data Analytics.
    </text>
    </div>
    
    const linkNameD=<text className="aboutuslink">{readMoreD?'Read Less << ':'Read More >> '}</text>

    return (
        <div >
        
            <div style={{backgroundColor: "black"}}>
                <ShopBy />
                <br/><br/>
            </div>

            <Container>
            <h1 class="text-center" style={{color: "#379069"}}>Me</h1>
            <Row>
    
                <Col>
                    <img style={{height:100, width:100}} alt={''}  src={b}/>

                    <h2 style={gcolor}>Demi Osikoya</h2> <br/>
                    <h3 style={gcolor}>Software Developer</h3>
                    {readMoreD && extraContentD}
                    <Button onClick={()=>{setReadMoreD(!readMoreD)}} size="sm" 
                    style={{fontWeight:'bold',borderColor: 'grey', background: 'white', color:'white',}} 
                    renderAs="button">
                        {linkNameD}
                    </Button>
                </Col>
            </Row>
        </Container>
        <br/><br/><br/>
        </div>
    );
};

export default About;