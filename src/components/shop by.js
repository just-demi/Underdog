import {ListGroup, ListGroupItem} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

export default function ShopBy(props){


    return(
        <div style={{borderRadius: 50, position: 'relative', left: 10, top: 10, width:'25rem', backgroundColor:'white',color:'black'}}>

            <ListGroup style={{ width:'25rem',}} className="fw-bold" >
                    <ListGroupItem style={{backgroundColor:'white',color:'black'}}>{"Shop By:"}</ListGroupItem>
                    <ListGroupItem action href="/shop-by-genre" >{"Genre"}</ListGroupItem>
                    <ListGroupItem >{"Author"}</ListGroupItem>
            </ListGroup>
        </div>
    )

}