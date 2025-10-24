//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";
// importante para rodar o carousel no lado do cliente




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

        </div>


      </div>

      <div className="section2">
        <div>
          <h2>Sobre o cursos</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A incidunt sint consectetur quibusdam id voluptate officia. 
            Quos ipsam pariatur placeat tenetur accusamus maxime aliquam dolorem, 
            nisi laudantium officiis odio nesciunt.</p>
          
          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
