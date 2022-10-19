import React, { Component } from "react";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import cement from '../components/misc_imgs/b.jpg';
import bricks from '../components/misc_imgs/f.jpg';
import sr from '../components/misc_imgs/t.jpg';

export default class LogoS extends Component {
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
          <img src={cement} alt={''}></img>
        </div>
        

        <div>
          <img src={bricks} alt={''}/>
        </div>

        <div>
          <img src={sr} alt={''}/>
        </div>
      </Carousel>
    );
  }
}