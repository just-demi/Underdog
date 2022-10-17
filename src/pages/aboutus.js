import React, { useState }  from "react";
import {Row,Col, Container} from 'react-bootstrap';
import ShopBy from "../components/shop by";
import './Signin.css';
import { Button } from "react-bootstrap";
import l from '../components/misc_imgs/h.png';
import b from '../components/misc_imgs/j.png';
import sr from '../components/misc_imgs/p.png';


const About = () => {

    const gcolor={
        color: "black",
    }

    const [readMore,setReadMore]=useState(false);
    const [readMoreB,setReadMoreB]=useState(false);
    const [readMoreL,setReadMoreL]=useState(false);
    const [readMoreD,setReadMoreD]=useState(false);


    const extraContent = <div>
    <text className="bod">
            aims to improve the competitiveness of small-medium book sellers through consolidating their 
            orders to improve bargaining power and building materials cost savings, 
            and granting them more favourable credit terms. 
            Our basic principle is to put readers first in all that we do and make sure that add value and 
            support the growth of their businesses because “Umuntu ngumuntu ngabantu”.
            <br/><br/>
            We are a proudly South African company that is 100% black-owned and have a BBBEE level 1 rating.
            We believe in building our business with a skilled and dynamic team from diverse backgrounds 
            in order to enhance the value proposition for all our stakeholders.
    </text>
    <br/><br/>
    </div>

    const extraContentB = <div >
    <text className="aboutusbod2">    
            He has served as a director of some publishing company and 
            previously worked for company abc across Africa and the Middle East. 
            He holds 3 qualifications from the University of Cape Town which include a Bachelor of Business Science in 
            Finance with Accounting, 
            Post-graduate Diploma in Accounting, and a Certificate in Property Development & Investments.
    </text>
    </div>

    const extraContentL = <div >
    <text className="aboutusbod2">     
            He is a graduate of the University of Cape Town, 
            with a Bachelor's degree in Business Science specialising in Finance and Accounting. 
            He has served his corporate time in the company hvx
            His business interest has led to his collaboration in the publishing industry.
    </text>
    </div>

    const extraContentD = <div >
    <text className="aboutusbod2"> 
            He is a recent graduate with a passion for software development, machine learning and big data. 
            He holds 2 qualifications from the University of the Witwatersrand which include a Bachelor of Science 
            with a major in computer science and a honors degree in Big Data Analytics.
    </text>
    </div>

    const linkName=<text className="aboutuslink">{readMore?'Read Less << ':'Read More >> '}</text>
    
    const linkNameB=<text className="aboutuslink">{readMoreB?'Read Less << ':'Read More >> '}</text>

    const linkNameL=<text className="aboutuslink">{readMoreL?'Read Less << ':'Read More >> '}</text>
    
    const linkNameD=<text className="aboutuslink">{readMoreD?'Read Less << ':'Read More >> '}</text>

    return (
        <div >
        
        <div >
        <ShopBy bg="white" txt="orangered"/>
            <br/><br/><br/>
        <Container>
            <h2 style={{color: "grey"}}>Business overview</h2>
            <text className="bod">
             is an e-commerce marketplace for construction materials in South Africa. <br/>

            The company was founded in 2021 to address some of the key challenges experienced by small to medium size 
            contractors which include receiving competitively priced construction materials, and getting access to credit. 
            The South African construction industry is highly fragmented,
            with small to medium size contractors making up the majority of the market, 
            but these entities receive a very small percentage of the value of projects from the public and private sector. 
            
            <br/><br/>
            
            {readMore && extraContent}
            <Button onClick={()=>{setReadMore(!readMore)}} size="sm" 
            style={{fontWeight:'bold',borderColor: 'grey', background: 'white', color:'white',}} 
            renderAs="button">
                {linkName}
            </Button>
            
            </text>
            </Container>
            </div>


            <br/><br/>
            <Container>
            <h1 class="text-center" style={{color: "orangered"}}>Team</h1>
            <Row>
                <Col>
                    <img style={{height:100, width:100}}  src={b}/>
                    <h2 style={gcolor}>Jaden Smith</h2> <br/>
                    <h3 style={gcolor}>Co-founder and CEO</h3>
                    {readMoreB && extraContentB}
                    <Button onClick={()=>{setReadMoreB(!readMoreB)}} size="sm" 
                    style={{fontWeight:'bold',borderColor: 'grey', background: 'white', color:'white',}} 
                    renderAs="button">
                        {linkNameB}
                    </Button>
                </Col>
                
                <Col>
                    <img style={{height:100, width:100}}  src={b}/>
                    <h2 style={gcolor}>Willow Smith</h2> <br/>
                    <h3 style={gcolor}>Co-founder and COO</h3>
                    {readMoreL && extraContentL}
                    <Button onClick={()=>{setReadMoreL(!readMoreL)}} size="sm" 
                    style={{fontWeight:'bold',borderColor: 'grey', background: 'white', color:'white',}} 
                    renderAs="button">
                        {linkNameL}
                    </Button>
                </Col>
                
                <Col>
                    <img style={{height:100, width:100}}  src={b}/>

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