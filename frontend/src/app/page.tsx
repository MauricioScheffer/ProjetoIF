//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";

//aqui definimos o titulo da aba do navegador e descricao
export const metadata = {
  title: "IFConecta DEV",
  description: "Portal do Instituto Federal Sapucaia do Sul"
}
"use client"; // importante para rodar o carousel no lado do cliente

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@/scss/home.scss"; // seu SCSS customizado

// import dinâmico para evitar erro de SSR
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: true,
    nav: false,
    animateOut: "fadeOut",
  };

  return (
    <div className="main">
      <div className="carousel">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src="/images/banner1.jpg" alt="Banner 1" />
          </div>
          <div className="item">
            <img src="/images/banner2.jpg" alt="Banner 2" />
          </div>
          <div className="item">
            <img src="/images/banner3.jpg" alt="Banner 3" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
