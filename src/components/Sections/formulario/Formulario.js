'use client';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './formulario.module.css';

const formulario = () => {
  return (
    <div>
      <div className={styles.formulario} id='orcamento'>
        <div>
          <Fade top>
            <h2>Orçamento</h2>
            <p className={styles.pform}>
              Preencha o formulario para realizar um orçamento sem compromisso!
            </p>
          </Fade>
        </div>

        <div className={styles.conteudoform}>
          <div className={styles.textform}>
            <Fade left>
              <h3>Contato:</h3>

              <ul className={styles.ulform}>
                <li>Instagram: @ij.code</li>
                <li>ijcode.oficial@gmail.com</li>
                <li>whats: (11)96650-2947</li>
              </ul>

              <p className={styles.pformcont}>
                Preencha o formulario e entraremos em contato para
                podermos lhe atender da melhor forma possivel!
              </p>
            </Fade>
          </div>

          <Fade right>
            <form
              className={styles.form}
              action="https://formsubmit.co/ijcode.oficial@gmail.com"
              method="post"
            >
              <input
                type="text"
                name="name"
                placeholder="Digite seu Nome..."
                required
              />

              <input
                type="e-mail"
                name="email"
                placeholder="Digite seu e-mail..."
                required
              />

              <textarea
                type="text"
                name="message"
                placeholder="Mensagem"
              ></textarea>

              <input type="hidden" name="_next" value="" />

              <input
                className={styles.enviarform}
                name="Enviar"
                type="submit"
              />

              <input type="hidden" name="_subject" value="Novo Contato!" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default formulario;
