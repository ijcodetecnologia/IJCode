'use client';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '@/components/Sections/projetos.slide/Slide.module.css';
import Button from '@/components/UI/Button';

const Slide = () => {
  return (
    <div className={styles.Projetos}>
      <p className={styles.pTopProjetos}>Ultimos</p>
      <h2>Projetos</h2>

      <p className={styles.pProjetos}>
        Veja abaixo os ultimos projetos que trabalhamos, clique na imagem para
        ver o site completo.
      </p>

      <Carousel data-bs-theme="dark" className="container">
        <Carousel.Item className="pb-5">
          <a href="https://isadoravanderlan.github.io/Portifolioisadoravanderlan2.0/" target='_blank'>
            <img
              className="d-block w-100"
              src="./portifolio/brilho.svg"
              // alt="First slide"
            />
          </a>
          <a href="https://ijcodetecnologia.github.io/Brilho-da-Magia-Decoracoes/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/cqc.svg"
            // alt="Second slide"
          />
          <a href="https://cqccartasqcuram.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/maelu.svg"
            // alt="Third slide"
          />
          <a href="https://maelumodaseuniformes.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/coco.svg"
            // alt="Third slide"
          />
          <a href="https://cocoricompany.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/iba.svg"
            // alt="Third slide"
          />
          <a href="https://institutobernalmeida.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/deefa.svg"
            // alt="Third slide"
          />
          <a href="https://deefauniformes.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/port.svg"
            // alt="Third slide"
          />
          <a href="https://isadoravanderlan.github.io/Portifolioisadoravanderlan2.0/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/jrx.svg"
            // alt="Third slide"
          />
          <a href="https://jrxuniformes.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
        </Carousel.Item>

        <Carousel.Item className="pb-5">
          <img
            className="d-block w-100"
            src="./portifolio/casa.svg"
            // alt="Third slide"
          />
          <a href="https://casadosgrampos.com.br/" target='_blanc'><button className={styles.ButtonProjetos}>Ver Site</button></a>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
