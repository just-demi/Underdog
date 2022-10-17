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


function formatMoney(n) {
  return "R" + (Math.round(n * 100) / 100).toLocaleString();
}

const Home = () => {
  
  const styleObj = {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }

 



  return (  
    <div>
    <div style={{backgroundColor: "black"}}>
    <ShopBy bg="orangered" txt="white"/>
    <Container>
    <div style={{textAlign: "right"}}>
    <Link to="/track_order">
    <img style={{height:90, width:80}}  src={track}/><br/>
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
  
    
    {<img style={{height:310, width:417.5}}  src={test}/>}
  <br/><br/><br/><br/>
    </div>

     

      <Link to='/aboutus'>
        <Button size="lg" style={{fontWeight:'bold',borderColor: 'orangered', background: 'orangered', color:'white',}} renderAs="button">
            Learn More
        </Button>
      </Link>
    </Container> <br/><br/><br/>

    <Container>
      <Row>
        <Col>
          <text className="colbod">
            Compare and order from a range of suppliers in your area all at a click of button. 
            Make all your bulk purchases for your cement, 
            ready-mix concrete and aggregate materials.
          </text>
        </Col>

        <Col>
          <text className="colbod">
            Saving you time and money, and improving your project cash flows. 
            We believe in empowering and supporting contractors and suppliers in South Africa’s 
            challenging construction industry.
          </text>
        </Col>
      </Row>
    </Container>
    <br/><br/><br/>

      <Container>
      <Row>
        
          <Col >
            <h2 style={{color:'orangered'}}>Convenience</h2>
            <text className="colbod">Coefficiency creates a construction marketplace, 
            enabling the sourcing of materials from a centralized location.</text>
          </Col>

          <Col>
            <h2 style={{color:'orangered'}}>Efficiency </h2>
            <text className="colbod">We reduce the number of intermediaries in the value chain and therefore reduce labor, 
            storage and transportation costs.</text>
          </Col>

          <Col>
            <h2 style={{color:'orangered'}}>Savings</h2>
            <text className="colbod">Savings from consolidating contractor orders and eliminating intermediaries 
              are passed onto the contractors.
            </text>
          </Col>
        </Row>
      </Container>
    <br/><br/>


    <Container>
    <h1 class="text-center" style={{color:"orangered"}}>We take pride in our numbers and adding value</h1>
    <br/>
      <div style={{color: "white"}}>
        <div className="column" >
          <h1 class="text-center" >6</h1>
          <h4 class="text-center" >Suppliers</h4>
        </div>
        <div className="column" >
        <div className="centered">
          <h1 class="text-center">20</h1>
          </div>
          <h4 class="text-center" >Customers</h4>
        </div>
        <div className="column">
          <h1 class="text-center" >{formatMoney(250000)}</h1>
          <h4 class="text-center" >Credit Granted to Date</h4>
        </div>
      </div><br/><br/>
  </Container>
  <br/><br/><br/><br/>

    </div>
    <br/><br/>
   

    <h1 class="text-center" style={{color:"orangered"}}> Testimonials</h1> 

    <div style={{backgroundColor: "white", color:"white"}} >
    <Testimonials />
    </div>
    <br/><br/>

    <h1 class="text-center" style={{color:"orangered"}}> Partners</h1> 
    <LogoS/>
    <br/><br/>
    <br/><br/>
    </div>
  );
};

export default Home;