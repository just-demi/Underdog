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
          <img src={cement} alt={''}></img>
          <div className="myCarousel">
            <h3>John Smith</h3>
            <h4>Constructor</h4>
            <p>
                The website is a great and reduces the time I spent ordering Books.
            </p>
          </div>
        </div>
        

        <div>
          <img src={bricks} alt={''}/>
          <div className="myCarousel">
            <h3>Sibusiso Dlamini</h3>
            <h4>Supplier</h4>
            <p>
              Thanks to Demi I am able to supply more books to more people and I don't have to worry about finding
              clients.
            </p>
          </div>
        </div>

        <div>
          <img src={sr} alt={''}/>
          <div className="myCarousel">
            <h3>Nadia Naidoo</h3>
            <h4>Customer</h4>
            <p>
              Demi helped me save money.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}