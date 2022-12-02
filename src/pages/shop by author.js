import React, { useEffect, useState } from "react";
import AuthorCards from "../components/card/Author card";
import {Container, Row} from 'react-bootstrap'
import axios from 'axios';
import rick from '../components/misc_imgs/rick.jpg';
import clare from '../components/misc_imgs/Clare.jpg'

const SBA = () => {

  const [author, setAuthor] = useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/get_authors').then(
      res => {
        const hold = res.data.results;
        hold.forEach(function (element) {
          element.id = element._id;
        });
        hold[0].imgs = clare;
        hold[1].imgs = rick;
        console.log(hold.name)
        setAuthor(hold);
      }
)
  }, []);




    return (
        <div className='row-wrapper' style={{color: "black",backgroundColor: "#f3f3f3"}}>
        <br/><br/>
        <h1 class="text-center" style={{color: "#379069"}}>Select your preferred Author</h1>
          
          <Container>
            <Row>
              {author.map(product => (
                <AuthorCards key={product.id} name={product.name} bio={product.bio} link={product.website} img={product.imgs}/>
              ))}  
            </Row>
        </Container>
      <br/><br/><br/>
      </div>

        
    );
};

export default SBA;