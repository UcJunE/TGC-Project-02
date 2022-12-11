import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/HomePage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fimgs.net/mdimg/perfume/375x500.611.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="img-1">Perfumex</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fimgs.net/mdimg/perfume/375x500.40069.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://fimgs.net/mdimg/perfume/375x500.14982.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}
