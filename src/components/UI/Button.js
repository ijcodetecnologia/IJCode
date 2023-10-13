import React from 'react'
import styles from './button.module.css';

const Button = () => {
  return (
    <button className={styles.button}>
      <a href="https://api.whatsapp.com/send?phone=5511932158698" target='blank'>Contato</a>
    </button>
  )
}

export default Button
