'use client';
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './depoimentos.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const cards = [
  {
    id: 1,
    title: 'João Carlos ',
    subTitle: 'De&Fa Uniformes',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: './img/persons/joao.svg',
  },
  {
    id: 2,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: './img/persons/joao.svg',
  },
  {
    id: 3,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: './img/persons/joao.svg',
  },
  {
    id: 4,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: './img/persons/joao.svg',
  },
  {
    id: 5,
    title: 'Swiper Carousel',
    subTitle: 'Swiper Carousel Example',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod',
    imageUrl: './img/persons/joao.svg',
  },
];

const Depoimentos = () => {
  const [largura, setLargura] = useState(window.innerWidth);

  console.log('testeLargura', largura);
  useEffect(() => {
    const atualizarLarguraDaTela = () => {
      setLargura(window.innerWidth);
    };
    atualizarLarguraDaTela();
  }, []);

  return (
    <div className={styles.depoimentos}>
      <section className={styles.title}>
        <Fade top>
          <h2>Depoimentos</h2>
          <p>Veja abaixo o que nossos clientes tem a falar sobre a IJCode! </p>
        </Fade>
      </section>
      <Fade rigth>
        <section>
          <Swiper
            className={styles.mySwiper}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={
              largura < 640 && largura > 450 ? 50 : largura < 450 ? 150 : 300
            }
            slidesPerView={
              largura < 640 && largura > 450 ? 2 : largura < 450 ? 1 : 3
            }
          >
            {cards.map((item) => (
              <SwiperSlide className={styles.swipContainer}>
                <div className={styles.swipItem}>
                  <div className={styles.imgBox}>
                    <img src={item.imageUrl} alt="slides" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <h3>{item.subTitle}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Fade>
    </div>
  );
};

export default Depoimentos;
