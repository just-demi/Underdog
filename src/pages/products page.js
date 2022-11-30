import React, { useEffect, useState } from "react";
import {Container, Row} from 'react-bootstrap'
import Productcard from "../components/card/product card";
import axios from 'axios';
//import { useCart } from "react-use-cart";
//import {ListGroup, Card, ListGroupItem} from 'react-bootstrap';


const Product_page = () => {
    
      const [books, setBooks] = useState([]);
      //const { addItem } = useCart();
     
      useEffect(() => {
        axios.get('http://localhost:3001/get_books').then(
          res => {
            //console.log(JSON.parse(res))
            const hold = res.data.results;
            hold.forEach(function (element) {
              element.id = element._id;
            });
            console.log(hold)
            setBooks(hold);
          }
  )
      }, []);


      //console.log(books);

    return (


        <div className='row-wrapper' style={{color: "black",backgroundColor: "#f3f3f3"}}>
          
          <Container>
            <Row>
              {books.map(product => (
                <Productcard key={product.id} product={product}/>
              ))}  
            </Row>
        </Container>
      <br/><br/><br/>
      </div>

        
    );
};

export default Product_page;