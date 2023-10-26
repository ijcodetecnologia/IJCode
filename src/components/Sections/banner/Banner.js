"use client";
import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <main className={styles.banner}>
      <div className={styles.maxWidth}>
        <div className={styles.textobanner}>
          <h1>IJCode</h1>
          <p className={styles.typewriter}>Inovação e sucesso.</p>
          <ul className={styles.iconbanner}>
            <li>
              <img src="./img/icons/ok.svg" alt="" />
              Desenvolvimento de Sites;
            </li>
            <li>
              <img src="./img/icons/ok.svg" alt="" />
              Inovação e Agilidade;
            </li>
            <li>
              <img src="./img/icons/ok.svg" alt="" />
              Confiança e segurança para sua empresa.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Banner;
