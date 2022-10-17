import {ListGroup, ListGroupItem} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';

export default function ShopBy(props){


    return(
        <div style={{borderRadius: 50, position: 'relative', left: 10, top: 45}}>

            <ListGroup style={{ width:'25rem',}} className="fw-bold" horizontal>
                    <ListGroupItem style={{backgroundColor:props.bg,color:props.txt, width:'2000px'}}>{"Shop By:"}</ListGroupItem>
                    <ListGroupItem action href="/sbp" style={{backgroundColor:props.bg,color:props.txt}}>{"Product"}</ListGroupItem>
                    <ListGroupItem style={{backgroundColor:props.bg,color:props.txt}}>{"Supplier"}</ListGroupItem>
                    <ListGroupItem style={{backgroundColor:props.bg,color:props.txt}}>{"Location"}</ListGroupItem>
            </ListGroup>
        </div>
    )

}