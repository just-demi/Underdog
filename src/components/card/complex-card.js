import Card from 'react-bootstrap/Card';
//import cement from './cement.jpg';
import Button from 'react-bootstrap/Button';

export default function Complex_card(props){


    return(
        <>
        <Card border="secondary" style={{ width: '18rem', backgroundColor: "white" }}>
        <Card.Img style={{height: '12rem', width:'18rem'}} variant="top" src={props.img} alt={props.name}/>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.des}
            </Card.Text>
    <Button variant="primary">Shop</Button>
        </Card.Body>
        </Card>

        </>
    )

}