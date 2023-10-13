'use client';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './beneficios.module.css';

const Beneficios = () => {
  return (
    <div className={styles.beneficios} id='beneficios'>
      <div>
        <Fade top>
          <h2>Benefícios</h2>
          <p className={styles.pbeneficios}>
            Crie um site com a IJCode, podemos oferecer uma série de benefícios
            significativos para pessoas e empresas que desejam estabelecer uma
            presença online sólida e eficaz. Abaixo, destacamos três desses
            benefícios:
          </p>
        </Fade>
      </div>

      <Fade bottom>
        <ul className={styles.ulbeneficios}>
          <li>
            <div>
              <img src="./img/icons/atraente.svg" alt="" />
            </div>
            <h3>Atraente e Responsivo</h3>
            <p>
              Seu site será otimizado para dispositivos móveis, isso garante que
              seu site seja acessível a qualquer hora, em qualquer lugar, e que
              os visitantes tenham uma experiência agradável.
            </p>
          </li>
          <li>
            <div>
              <img src="./img/icons/computer.svg" alt="" />
            </div>
            <h3>Expertise Profissional</h3>
            <p>
              A IJCode possui uma equipe experiente e qualificada que pode criar
              um site sob medida para atender às suas necessidades específicas.
              Eles estão atualizados com as últimas tendências e tecnologias
              web, garantindo que seu site seja moderno e funcional.
            </p>
          </li>
          <li>
            <div>
              <img src="./img/icons/results.svg" alt="" />
            </div>
            <h3>Resultados Mensuráveis</h3>
            <p>
              Nós não apenas constróimos sites, mas também nos preocupamos com o
              sucesso do seu projeto online. Metodologia avançada para melhorias
              com base em dados concretos.
            </p>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Beneficios;
