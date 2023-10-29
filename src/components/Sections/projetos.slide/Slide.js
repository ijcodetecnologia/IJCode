"use client";
import Carousel from "react-bootstrap/Carousel";

const Slide = () => {
  return (
    <Carousel data-bs-theme="dark" className="container">
      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/brilho.svg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/cqc.svg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/maelu.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/coco.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/iba.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/deefa.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/port.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/jrx.svg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item className="pb-5">
        <img
          className="d-block w-100"
          src="./portifolio/casa.svg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
