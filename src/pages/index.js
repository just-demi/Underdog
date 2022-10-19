import React from 'react';  //Landing Page
import {Container,Row,Col} from 'react-bootstrap';
import LogoS from '../components/Logo scroller';
import ShopBy from '../components/shop by';
import Testimonials from '../components/Testimonials';
import test from '../components/misc_imgs/books.png';
import track from '../components/misc_imgs/tracktext.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Signin.css';




const Home = () => {
  
  /*const styleObj = {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }*/

 



  return (  
    <div>
    <div style={{backgroundColor: "black"}}>
    <ShopBy />
    <Container>
    <div style={{textAlign: "right"}}>
    <Link to="/track_order">
    <img style={{height:90, width:80}} alt={''} src={track}/><br/>
    </Link>
    </div>
    </Container>
    <br/>
    <Container style={{ color: "white"}}>

    <div className='row'>
    <div className='col left'>
    <h1 className='head'>Cheaper Faster & Quality textbook </h1>

    <br/>

  <text className='fbod'>
    Order your textbook online and get access <br/> to more suppliers, 
    products and credit for your purchases.
  </text> 
  </div>
  
    
    {<img style={{height:310, width:417.5}} alt={''} src={test}/>}
  <br/><br/><br/><br/>
    </div>

     

      <Link to='/aboutus'>
        <Button size="lg" style={{fontWeight:'bold',borderColor: '#379069', background: '#379069', color:'white',}} renderAs="button">
            Learn More
        </Button>
      </Link>
    </Container> <br/><br/><br/>

    <Container>
      <Row>
        <Col>
          <text className="colbod">
            This website is a passion project for something I love, reading.
            It was intially going to be a website for buying and selling textbooks but I think it can be more.
            I'd like to use it to practice my skills.
          </text>
        </Col>

        <Col>
          <text className="colbod">
            Since it is a fun project, no one will actually buy books off of it.
            But I want to add a magazine section, hopefully I will end up doing this and not just 
            giving up on this.
          </text>
        </Col>
      </Row>
    </Container>
    <br/><br/><br/>
   



  <br/><br/><br/><br/>

    </div>
    <br/><br/>
   

    <h1 class="text-center" style={{color:"#379069"}}> Testimonials</h1> 

    <div style={{backgroundColor: "white", color:"white"}} >
    <Testimonials />
    </div>
    <br/><br/>

    <h1 class="text-center" style={{color:"#379069"}}> Partners</h1> 
    <LogoS/>
    <br/><br/>
    <br/><br/>
    </div>
  );
};

export default Home;