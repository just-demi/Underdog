import React from "react";
import DescCards from "../components/card/description card";
import { Button } from "react-bootstrap";
import {Container,Row,Col} from 'react-bootstrap';
import { useCart } from "react-use-cart";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

const products = [
    {
      id: "1",
      name: "The lightning Thief",
      price: 80,
      quantity: 1,
      author: "Rick Roiden",
      description: "The Lightning Thief is a 2005 American fantasy-adventure novel based on Greek mythology, the first young adult novel written by Rick Riordan in the Percy Jackson & the Olympians series. It won the Adult Library Services Association Best Books for Young Adults, among other awards.",
    }]

const ProductDetail = () => {
    const { addItem } = useCart();
    return (
        
        <div style={{color: "black",backgroundColor: "#f3f3f3"}}/*style={{backgroundColor: "#f9f9f9"}}*/>
        <br/><br/>
        <Container>
            <h1 style={{color: "#379069"}}>Product Description</h1>
        </Container>
        

        <Container>
          <Row>
            <Col lg={true} ><DescCards product={products[0]} /></Col>

            <Col lg={true}>
            <Container style={formStyle2}>
                            <h2>{formatMoney(products[0].price)}</h2>            
                                <br/>      
                                <Row>
                                    <Container>
                                        <Button style={{width:'100%', backgroundColor: "#379069", color:"white", borderColor:"#379069"}} onClick={() => addItem(products[0])} > 
                                        Add to cart</Button>
                                    </Container>
                                </Row>            
                                <br/>
                                <Row>
                                    <Container>
                                        <Button style={{width:'100%', backgroundColor: "lightgray", color:"black", borderColor:"lightgray"}} > 
                                        Add to list</Button>
                                    </Container>
                                </Row>  
                            <br/><br/>
                        </Container>
            </Col>
          </Row>
        </Container>
        <div>
          <h1>{ /*items.length*/ }</h1>
        </div>
        <br/><br/><br/>
        </div>
        
    );
};

const formStyle2 = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: 'white',
    width: '15rem',
  	display: 'block',
    color: 'black',
    height: '13rem'
};

export default ProductDetail;