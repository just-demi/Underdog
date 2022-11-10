import {Card} from 'react-bootstrap';
import book from '../misc_imgs/fantasybooks.png';
import {Container} from 'react-bootstrap';



export default function DescCards(props){
    

    return(
        <>
        <Card style={{ width: '40rem', backgroundColor: "white"}} className="text-center">
            <Container>
                <span>
                <Card.Img style={{height: '12rem', width:'12rem', left:'-10px'}} className="col"  src={book} alt={props.product.name}/>
                <Card.Body className="col-center">
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                    {"By: " +props.product.author}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                </Card.Body>
                </span>
            </Container>
        {/*<Card.Img className="rounded mx-auto d-block" style={{height: '12rem', width:'12rem'}} variant="top" src={book} alt={props.product.name}/>
        <Card.Body>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Text>
            {"by " + props.product.author}
            </Card.Text>
            <Card.Text>
            <h5>{formatMoney(props.product.price)}</h5>
            </Card.Text>
    </Card.Body>*/}
        </Card>

        </>
    )

}