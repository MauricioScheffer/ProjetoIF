//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";
// importante para rodar o carousel no lado do cliente
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



export default function Home() {
  // const options = {
  //   items: 1,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 4000,
  //   dots: true,
  //   nav: false,
  //   animateOut: "fadeOut",
  // };

  return (
    <div className="main">
      <div className="carousel">
        <div className="image">
          {/* <img src="" alt="" /> */}
          oi
        </div>


      </div>

      <div className="section2">
        ola
      </div>
    </div>
  );
}
