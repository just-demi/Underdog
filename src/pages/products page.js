import React from "react";
import {Container, Row} from 'react-bootstrap'
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
          author: "some other supplier"
        },
        {
          id: "3",
          name: "A grade sand",
          price: 500,
          quantity: 1,
          author: "some new supplier"
        },
        {
          id: "4",
          name: "A grade stones",
          price: 500,
          quantity: 1,
          author: "some old supplier"
        },
        {
          id: "5",
          name: "Low strength cement",
          price: 70,
          quantity: 1,
          author: "some recent supplier"
        },
        {
          id: "6",
          name: "Medium strength cement",
          price: 75,
          quantity: 1,
          author: "some far supplier"
        },
        {
          id: "7",
          name: "Titans Curse",
          price: 250,
          quantity: 1,
          author: "Rick Roiden"
        },
        {
          id: "8",
          name: "City of Bones",
          price: 75,
          quantity: 1,
          author: "Cassandra Clare"
        },
      ];
//var imgs = [cement,bricks,sr,mix]






    return (


        <div className='row-wrapper' style={{color: "black",backgroundColor: "#f3f3f3"}}>
          
          <Container>
            <Row>
              {products.map(product => (
                <Productcard key={product.id} product={product}/>
                
              ))}  
            </Row>
        </Container>
      <br/><br/><br/>
      </div>

        
    );
};

export default Product_page;