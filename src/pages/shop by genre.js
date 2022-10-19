import React from "react";
import Cards from "../components/card/card";
import {Container, Row, Col} from 'react-bootstrap'
import Fantasy from '../components/misc_imgs/fantasybooks.png';
import Action from '../components/misc_imgs/action.jpg';
import Romance from '../components/misc_imgs/romance.png';
import ya from '../components/misc_imgs/ya.jpg';



const SBP = () => {
var Titles = ['Fantasy','Action','Romance','ya']
var Description = ['',
                    '',
                    '',
                    '']
var imgs = [Fantasy,Action,Romance,ya]




    return (
        <div style={{backgroundColor: "#fafafa"}}>
        <br/><br/>
        <h1 class="text-center" style={{color: "orangered"}}>Choose from a wide range of materials <br/> for your project needs</h1>
        <Container>
        <Row>
       <Col><Cards name={Titles[0]} des={Description[0]} img={imgs[0]} link={"/product_page"}/></Col>
       <Col><Cards name={Titles[1]} des={Description[1]} img={imgs[3]}/></Col>
       <Col><Cards name={Titles[2]} des={Description[2]} img={imgs[1]}/></Col>
       </Row>
       <br/>
       <Row>
       <Col><Cards name={Titles[3]} des={Description[3]} img={imgs[2]}/></Col>
       </Row>
       </Container>
       <br/><br/><br/>
        </div>
    );
};

export default SBP;