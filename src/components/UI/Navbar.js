'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div>
        <ul className={styles.navbar}>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
