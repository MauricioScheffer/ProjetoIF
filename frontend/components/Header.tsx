"use client";
import {useState} from "react";
import styles from "./Header.module.css";
import Image from "next/image";


export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/1.webp" alt="Logo DevConecta" />
          <span>DevConecta</span>
        </div>
        <ul className={styles["nav-links"]}>
          <li><a href="#">Início</a></li>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Instituição</a></li>
          <li><a href="#">Orientadores</a></li>
          <li><a href="#">Contate-nos</a></li>
        </ul>
      </nav>
    </header>
  );
}