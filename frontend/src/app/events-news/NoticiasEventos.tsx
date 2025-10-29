"use client";

import Image from "next/image";
import styles from "./page.module.css"; 

export default function NoticiasEventos() {
  return (
    <main className={styles["app-container"]}>
      <section className={styles["noticias-container"]}>
        <div className={styles["noticias-left"]}>
          <h1 className={styles.titulo}>Notícias e eventos</h1>

          <div className={styles["imagem-wrapper"]}>
            <Image
              src="/images/image.jpg"
              alt="Evento de tecnologia"
              width={600}
              height={400}
              className={styles["imagem-evento"]}
            />
          </div>

          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet. Vel adipisci commodi non vitae aliquid hic unde cupiditate. 
            33 ratione galisum ut odio quod sed voluptatem rerum id sint esse sit totam corporis qui 
            earum dolores ab omnis asperiores! Ea omnis minus et ratione veritatis a nobis optio At 
            laborum accusantium ab consequatur eaque? Ut exercitationem molestiae et voluptas doloribus 
            hic error laboriosam non cupiditate natus et repellendus dolor est numquam perspiciatis ab 
            sapiente repellendus.
          </p>

          <button className={styles["botao-eventos"]}>Veja todos os eventos</button>
        </div>

        <div className={styles["noticias-right"]}>
          <div className={styles["lista-eventos"]}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={styles["evento-item"]}>
                <h3>
                  Nome do evento: <span>Subtítulo</span>
                </h3>
                <span className={styles.data}>15 de setembro, 2025</span>
                <span className={styles.seta}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
