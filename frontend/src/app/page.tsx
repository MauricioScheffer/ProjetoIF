//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";
import Image from "next/image";
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
    <main className={styles.main}>

      {/* iniicio */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
                <h1>Bem vindo ao Nosso Site</h1>
                <p>
                  Conheça mais sobre Tecnologias e Educação aqui. 
                  <br />
                  Se inscreva em Eventos e Participe da Nossa Comunidade de Estudantes de T.I!
                </p>
                <button className={styles.heroButton}>Saiba mais</button>
          </div>
          <div className={styles.heroRight}>
              <Image
              src="/images/image.jpg"
              alt="Imagem Institucional"
              width={570}
              height={400}
              className={styles.heroImage}
              priority/>
              <button className={styles.heroButton}>Nossos cursos</button>
          </div>
        </div>
      </section>

    {/* sobre  o curso*/}
      <div className="about">
        <div>
          <h2>Sobre o cursos</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A incidunt sint consectetur quibusdam id voluptate officia. 
            Quos ipsam pariatur placeat tenetur accusamus maxime aliquam dolorem, 
            nisi laudantium officiis odio nesciunt.</p>
        </div>
      </div>

    {/* news e eventos */}
    {/* professores */}
    {/* sobre o portal */}
    

    </main>
  );
}
