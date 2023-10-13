'use client';
import { Link } from 'react-scroll';
import React, { useState } from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
      >
        <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              href=""
            >
              Home
            </Link>
        <Link
              to="vantagens"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              href=""
            >
              Vantagens
            </Link>
        <Link
              to="beneficios"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              href=""
            >
              Beneficíos
            </Link>
        <Link
              to="orcamento"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              href=""
            >
              Orçamento
            </Link>
      </nav>
    </div>
  );
};

export default MenuMobile;
