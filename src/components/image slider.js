import React, { Component } from "react";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cement from '../components/misc_imgs/h.png';
import bricks from '../components/misc_imgs/j.png';
import sr from '../components/misc_imgs/p.png';
import "./testimonials.css"

export default class Testimonials extends Component {
  render() {
    return (
      
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}>
        <div>
          <img src={cement}></img>
        </div>
        

        <div>
          <img src={bricks}/>
        </div>

        <div>
          <img src={sr}/>
        </div>
      </Carousel>
    );
  }
}