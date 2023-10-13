import React from 'react';
import styles from './header.module.css';
import Navbar from '@/components/UI/Navbar';
import Button from '@/components/UI/Button';
import MenuMobile from '@/components/UI/MenuMobile';

const Header = () => {
  return (
    <header className={`${styles.main} main`} id='home'>
      <img className={styles.logo} src="./img/logo.png" alt="" />
      <div className={styles.nav}>
        <Navbar />
        <Button />
        <div className={styles.menuHamburguer}>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
