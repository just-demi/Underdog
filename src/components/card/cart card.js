/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import cement from './cement.jpg';
import { useCart } from "react-use-cart";

function formatMoney(n) {
    return "R" + (Math.round(n * 100) / 100).toLocaleString();
}

export default function Cartcard(props){
    const { items,removeItem } = useCart();


    return(
        <>
        <Card border="secondary" style={{ width: '55rem', backgroundColor: "white" }}  className="text-center">
        <Card.Img class="col-auto" style={{height: '12rem', width:'18rem', left: 0}} src={cement} alt={props.product.name}/>
        <Card.Body className="col">
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            {"Price: " +formatMoney(props.product.price)}
            </Card.Text>
          <button style={{borderRadius: 15,backgroundColor: "orangered", color:"white"}} onClick={() => removeItem(props.product.id)}>Remove from cart</button>
        </Card.Body>
        </Card>

        </>
    )

}