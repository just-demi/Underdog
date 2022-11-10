//import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

export default function ShopBy(props){


    return(
        <Container>
            <div style={{position: 'relative', top: 10, width:'25rem', backgroundColor:'white',color:'black'}}>

                <ListGroup horizontal variant="flush" className="fw-bold" >
                        <ListGroup.Item style={{width:'15rem'}} >{<b>"Shop By:"</b>}</ListGroup.Item>
                        <ListGroup.Item action href='/product_page'>{"Genre"}</ListGroup.Item>
                        <ListGroup.Item action href='#'>{"Author"}</ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    )

}