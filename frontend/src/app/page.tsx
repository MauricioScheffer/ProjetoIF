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
    <section className={styles.sobre}>
      <h2>Sobre os cursos</h2>
      <p className={styles.descricao}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className={styles.cursosContainer}>
        {/* CARD 1 - TDS */}
        <div className={styles.card}>
          <div className={styles.tag}>TDS</div>
          <Image
            src="/images/tds.jpg"
            alt="Curso Técnico em Desenvolvimento de Sistemas"
            width={400}
            height={250}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>Técnico em Desenvolvimento de Sistemas</h3>
            <p>Integrado ao Ensino Médio. Lorem ipsum dolor sit amet.</p>
            <a href="#" className={styles.verMais}>VEJA MAIS</a>
          </div>
        </div>

        {/* CARD 2 - TADS */}
        <div className={styles.card}>
          <div className={styles.tag}>TADS</div>
          <Image
            src="/images/tads.jpg"
            alt="Curso de Análise e Desenvolvimento de Sistemas"
            width={400}
            height={250}
            className={styles.cardImage}
          />
          <div className={styles.cardContent}>
            <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" className={styles.verMais}>VEJA MAIS</a>
          </div>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.btn}>Veja também os projetos do TDS</button>
        <button className={styles.btn}>Veja também os projetos do TADS</button>
      </div>

      <p className={styles.linkInstituicao}>
        Acesse o site do IFSUL para saber mais sobre a instituição &gt;
      </p>
    </section>

    {/* news e eventos */}
    {/* professores */}
    {/* sobre o portal */}
    

    </main>
  );
}
