"use client";
import { Link } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";
import styles from "./MenuMobile.module.css";

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
  }, []);

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
        ref={menuRef}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
          onClick={() => setMobileMenu(!mobileMenu)}
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
          onClick={() => setMobileMenu(!mobileMenu)}
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
          onClick={() => setMobileMenu(!mobileMenu)}
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
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          Orçamento
        </Link>
      </nav>
    </div>
  );
};

export default MenuMobile;
