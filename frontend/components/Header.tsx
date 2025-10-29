"use client";
import {useState} from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";


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
          <li><Link href="/events-news">Eventos</Link></li>
          <li><a href="#">Instituição</a></li>
          <li><a href="#">Orientadores</a></li>
          <li><a href="#">Contate-nos</a></li>
        </ul>
      </nav>
    </header>
  );
}