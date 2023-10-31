import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.imgfooter}>
        <img src="./img/logo.png" alt="" />
      </div>

      <p>ijcode.oficial@gmail.com</p>

      <ul className={styles.ul_img_footer}>
        <li className={styles.icons}>
          <a href="https://api.whatsapp.com/send?phone=5511932158698" target='blank'>
            <img src="./img/icons/whats.svg" alt="" />
          </a>
        </li>
        <li className={styles.icons}>
          <a href="mailto:ijcode.oficial@gmail.com">
            <img src="./img/icons/email.svg" alt="" />
          </a>
        </li>
        <li className={styles.icons}>
          <a href="https://www.instagram.com/ij.code/" target='blank'>
            <img src="./img/icons/insta.svg" alt="" />
          </a>
        </li>
      </ul>

      <div className={styles.copy}>
        <p>©Copyright IJCode - By <a href="https://www.linkedin.com/in/isadoravanderlan/">Isadora Vanderlan</a> and <a href="https://www.linkedin.com/in/julio-cesar-junior/">Julio Cesar</a> </p>
      </div>
    </div>
  );
};

export default Footer;
