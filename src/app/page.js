import Banner from '@/components/Sections/banner/Banner';
import Beneficios from '@/components/Sections/beneficios/Beneficios';
import Depoimentos from '@/components/Sections/depoimentos/Depoimentos';
import Formulario from '@/components/Sections/formulario/Formulario';
import Footer from '@/components/Sections/footer/Footer';
import Header from '@/components/Sections/header/Header';
import Promocao from '@/components/Sections/promoção/Promocao';
import Vantagens from '@/components/Sections/vantagens/Vantagens';
import './page.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Vantagens />
      <Promocao />
      <Beneficios />
      {/* <Depoimentos /> */}
      <Formulario />
      <Footer />

      <div className="whats">
        <a href="https://api.whatsapp.com/send?phone=5511932158698" target='blank'>
          <img src="./img/WhatsApp.svg.webp" alt="" />
        </a>
      </div>
    </main>
  );
}

