//import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import {Container} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

export default function ShopBy(props){


    return(
        <Container>
            <div style={{position: 'relative', top: 10, width:'12rem', backgroundColor:'white',color:'black'}}>

                <ListGroup variant="flush" className="fw-bold" >
                        <ListGroup.Item >{<b>Shop By:</b>}</ListGroup.Item>
                        <ListGroup.Item action href='/shop-by-genre'>{"Genre"}</ListGroup.Item>
                        <ListGroup.Item action href='/shop-by-author'>{"Author"}</ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    )

}