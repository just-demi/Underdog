import React from "react";
import Cards from "../components/card/card";
import {Container, Row} from 'react-bootstrap'
import Fantasy from '../components/misc_imgs/fantasybooks.png';
import Action from '../components/misc_imgs/action.jpg';
import Romance from '../components/misc_imgs/romance.png';
import ya from '../components/misc_imgs/ya.jpg';



const SBA = () => {

const hold = [
    {
      id: "1",
      name: "Fantasy",
      Description:'',
      imgs: [Fantasy]
    },
    {
        id: "2",
        name: "Action",
        Description:'',
        imgs: [Action]
    },
    {
      id: "3",
      name: "Romance",
      Description:'',
      imgs: [Romance]
    },
    {
      id: "4",
      name: "ya",
      Description:'',
      imgs: [ya]
    }]




    return (
        <div className='row-wrapper' style={{color: "black",backgroundColor: "#f3f3f3"}}>
        <br/><br/>
        <h1 class="text-center" style={{color: "#379069"}}>Choose a genre to get started</h1>
          
          <Container>
            <Row>
              {hold.map(product => (
                <Cards key={product.id} name={product.name} img={product.imgs}/>
              ))}  
            </Row>
        </Container>
      <br/><br/><br/>
      </div>

        
    );
};

export default SBA;