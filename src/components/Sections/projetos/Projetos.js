'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Projetos.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Projetos = () => {
  return (
    <div className="container" id="projetos">
      <span>Ultimos</span>
      <h2>Projetos</h2>
      <p>
        Veja abaixo os ultimos projetos que trabalhamos, clique na imagem para
        ver o site na web.
      </p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <a href="https://ijcodetecnologia.github.io/Brilho-da-Magia-Decoracoes/" target='_blanc'>
            <img src="./portifolio/brilho.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://isadoravanderlan.github.io/Portifolioisadoravanderlan2.0/" target='_blanc'>
            <img src="./portifolio/port.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://deefauniformes.com.br/" target='_blanc'>
            <img src="./portifolio/deefa.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cqccartasqcuram.com.br/" target='_blanc'>
            <img src="./portifolio/cqc.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://jrxuniformes.com.br/" target='_blanc'>
            <img src="./portifolio/jrx.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://casadosgrampos.com.br/" target='_blanc'>
            <img src="./portifolio/casa.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://cocoricompany.com.br/" target='_blanc'>
            <img src="./portifolio/coco.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://institutobernalmeida.com.br/" target="_blanc">
            <img src="./portifolio/iba.svg" alt="slide_image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://maelumodaseuniformes.com.br/" target='_blanc'>
            <img src="./portifolio/maelu.svg" alt="slide_image" />
          </a>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src="./img/icons/setaleft.svg" alt="" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src="./img/icons/setaright.svg" alt="" />
          </div>
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Projetos;
