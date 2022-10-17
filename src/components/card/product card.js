import {ListGroup, Card, ListGroupItem} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import cement from './cement.jpg';
import React, { useState } from "react";
import { useCart } from "react-use-cart";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString();
}


export default function Productcard(props){
  const [quantity, setQuantity] = useState("");
    

  const { addItem,updateItemQuantity,item,removeItem,getItem,inCart } = useCart();

  function getQuantity(hold){
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
}

function updateQuantity2(hold, amount){
    if(inCart(hold)){
        updateItemQuantity(hold, getItem(hold).quantity + amount)}
    else{

    }
    }

function updateQuantity3(hold, amount){
    if(inCart(hold)){
        updateItemQuantity(hold, amount)}
    else{
        alert("Please first add to cart before updating the Quantity")
    }
    }

var minus_button = <button onClick={() => updateQuantity(props.product.id,1)} >
  -
</button>

var plus_button = <button onClick={() => updateQuantity2(props.product.id,1)} >
  +
</button>
    
//setQuantity(getQuantity(props.product.id));

    return(
        <>
        <Card border="secondary" style={{ width: '18rem', backgroundColor: "white" }}>
        <Card.Img style={{height: '12rem', width:'18rem'}} variant="top" src={cement} alt={props.product.name}/>
        <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            {"Product Description:" }
            </Card.Text>
            <Card.Text>
            {"Unit Price: " + formatMoney(props.product.price)}
            </Card.Text>
            <Card.Text>
            {"Quantity:" + getQuantity(props.product.id)}
            <input
                type="number"
                value={getQuantity(props.product.id)}
                onChange={(e) => updateQuantity3(props.product.id, e.target.value)}
            />
            </Card.Text>
            </Card.Body>

            <ListGroup className="list-group-flush">
                <ListGroupItem>{"Quantity:" + getQuantity(props.product.id)} </ListGroupItem>
                <ListGroupItem>{minus_button}{plus_button}</ListGroupItem>
            </ListGroup>

            <Card.Body>
            <button style={{borderRadius: 15,backgroundColor: "orangered", color:"white"}} onClick={() => addItem(props.product)} > 
            Add to cart</button>

        </Card.Body>
        </Card>

        </>
    )

}