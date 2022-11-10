import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
/*import cement from '../components/card/cement.jpg';
import bricks from '../components/card/bandb.jpg';
import sr from '../components/card/gravel-stone-soil-sand.jpg';
import mix from '../components/card/readymix.jpg';*/
import Productcard from "../components/card/product card";
//import { useCart } from "react-use-cart";
//import {ListGroup, Card, ListGroupItem} from 'react-bootstrap';



const Product_page = () => {
    /*const {
        /*isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        inCart,
        addItem,
        getItem,
        updateItem,
      } = useCart();*/
      //const { addItem } = useCart();
     

 
    const products = [
        {
          id: "1",
          name: "The lighting Thief",
          price: 80,
          quantity: 1,
          author: "Rick Roiden"
        },
        {
          id: "2",
          name: "B grade bricks",
          price: 10,
          quantity: 1,
          supplier: "some other supplier"
        },
        {
          id: "3",
          name: "A grade sand",
          price: 500,
          quantity: 1,
          supplier: "some new supplier"
        },
        {
          id: "4",
          name: "A grade stones",
          price: 500,
          quantity: 1,
          supplier: "some old supplier"
        },
        {
          id: "5",
          name: "Low strength cement",
          price: 70,
          quantity: 1,
          supplier: "some recent supplier"
        },
        {
          id: "6",
          name: "Medium strength cement",
          price: 75,
          quantity: 1,
          supplier: "some far supplier"
        },
      ];
//var imgs = [cement,bricks,sr,mix]






    return (
        
        <div style={{color: "black",backgroundColor: "#f3f3f3"}}/*style={{backgroundColor: "#f9f9f9"}}*/>
        <br/><br/>
        <h1 class="text-center" style={{color: "#379069"}}>Choose your preferred genre</h1>
        

        <Container>
          <Row>
            <Col><Productcard product={products[0]} /></Col>
            <Col><Productcard product={products[1]} /></Col>
            <Col><Productcard product={products[2]}/></Col>
          </Row>
          <br/>
          <Row>
            <Col><Productcard product={products[3]}/></Col>
            <Col><Productcard product={products[4]} /></Col>
            <Col><Productcard product={products[5]} /></Col>
          </Row>
        </Container>
        <div>
          <h1>{ /*items.length*/ }</h1>
        </div>
        <br/><br/><br/>
        </div>
        
    );
};

export default Product_page;