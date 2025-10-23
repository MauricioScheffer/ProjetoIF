"use client";

import Image from "next/image";
import "./page.module.css";

export default function NoticiasEventos() {
  return (
    <main className="app-container">
      <section className="noticias-container">
        <div className="noticias-left">
          <h1 className="titulo">Notícias e eventos</h1>

          <div className="imagem-wrapper">
            <Image
              src="/evento1.png"
              alt="Evento de tecnologia"
              width={600}
              height={400}
              className="imagem-evento"
            />
          </div>

          <p className="descricao">
            Lorem ipsum dolor sit amet. Vel adipisci commodi non vitae aliquid hic unde cupiditate. 
            33 ratione galisum ut odio quod sed voluptatem rerum id sint esse sit totam corporis qui 
            earum dolores ab omnis asperiores! Ea omnis minus et ratione veritatis a nobis optio At 
            laborum accusantium ab consequatur eaque? Ut exercitationem molestiae et voluptas doloribus 
            hic error laboriosam non cupiditate natus et repellendus dolor est numquam perspiciatis ab 
            sapiente repellendus.
          </p>

          <button className="botao-eventos">Veja todos os eventos</button>
        </div>
        <div className="noticias-right">
          <div className="lista-eventos">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="evento-item">
                <h3>
                  Nome do evento: <span>Subtítulo</span>
                </h3>
                <span className="data">15 de setembro, 2025</span>
                <span className="seta">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
