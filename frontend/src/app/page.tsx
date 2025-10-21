//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";

//aqui definimos o titulo da aba do navegador e descricao
export const metadata = {
  title: "IFConecta DEV",
  description: "Portal do Instituto Federal Sapucaia do Sul"
}
export default function Home() {
  return (
    <html lang="pt-br">
      <body>
        <div className="main">
          <div className="carousel">
            

            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
