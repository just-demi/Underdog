/* eslint-disable no-unused-vars */
import {Card} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import cement from '../misc_imgs/fantasybooks.png';
import React, { useState } from "react";
import { useCart } from "react-use-cart";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString();
}


export default function Productcard(props){
  //const [quantity, setQuantity] = useState("");
    

  const { addItem } = useCart();

    return(
        <>
        <Card style={{ width: '18rem', backgroundColor: "white", margin:'1rem' }}>
        <Card.Img className="rounded mx-auto d-block" style={{height: '12rem', width:'12rem'}} variant="top" src={cement} alt={props.product.name}/>
        <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            {"by " + props.product.author}
            </Card.Text>
            <Card.Text>
            <h5>{formatMoney(props.product.price)}</h5>
            </Card.Text>
            </Card.Body>

           

            <Card.Body>
            <button style={{borderRadius: 5,backgroundColor: "#379069", color:"white", borderColor:"#379069"}} onClick={() => addItem(props.product)} > 
            Add to cart</button>

        </Card.Body>
        </Card>

        </>
    )

  /*function getQuantity(hold){
    if(inCart(hold)){
        return getItem(hold).quantity
    }
    else{
        return 0
    }
}

function updateQuantity(hold, amount){
    if(inCart(hold)){
        updateItemQuantity(hold, getItem(hold).quantity - amount)}
    else{

    }
}*/


    
//setQuantity(getQuantity(props.product.id));
}