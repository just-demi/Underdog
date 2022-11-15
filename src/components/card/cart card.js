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
        <Card style={{ width: '43rem', backgroundColor: "white" }}  className="text-center">
            <span>
        <Card.Img style={{height: '12rem', width:'12rem', left:'-10px'}} className="col"  src={cement} alt={props.product.name}/>
        <Card.Body className="col-center">
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            {"Price: " +formatMoney(props.product.price)}
            </Card.Text>
            <Card.Text>
            {"Quantity in cart: " + props.product.quantity}
            </Card.Text>
          <button style={{border: '1px solid #379069', borderRadius:5,backgroundColor: "#379069", color:"white"}} onClick={() => removeItem(props.product.id)}>Remove from cart</button>
        </Card.Body>
        </span>
        </Card>

        </>
    )

}