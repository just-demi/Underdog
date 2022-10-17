import React from "react";
import Cards from "../components/card/card";
import {Container, Row, Col} from 'react-bootstrap'
import cement from '../components/card/cement.jpg';
import bricks from '../components/card/bandb.jpg';
import sr from '../components/card/gravel-stone-soil-sand.jpg';
import mix from '../components/card/readymix.jpg';



const SBP = () => {
var Titles = ['Cement','Ready Mix concrete',' Bricks and Blocks','Sand/soil and Stone/Rock']
var Description = ['',
                    '',
                    '',
                    '']
var imgs = [cement,bricks,sr,mix]




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