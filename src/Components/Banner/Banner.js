import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/banner/banner (1).jpg";
import banner2 from "../../images/banner/banner (2).jpg";
import banner3 from "../../images/banner/banner (3).jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Monitor collections</h3>
            <p>Various collection of Monitors and Televisions</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Exclusive PC and Laptops</h3>
            <p>All kind of PC and Laptop available.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Our Phone Collections</h3>
            <p>We have every brands of numerous phones with latest feature</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
