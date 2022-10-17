import Card from 'react-bootstrap/Card';
//import cement from './cement.jpg';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

export default function Cards(props){
    

    return(
        <>
        <Card border="secondary" style={{ width: '18rem', backgroundColor: "white" }}>
        <Card.Img style={{height: '12rem', width:'18rem'}} variant="top" src={props.img} alt={props.name}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.des}
            </Card.Text>
            <Link to="/product_page">
                <Button style={{background: 'orangered', border: '1px solid #efffff',}}  renderAs="button">
                    <span>Order Now</span>
                </Button>
            </Link>
        </Card.Body>
        </Card>

        </>
    )

}