"use client";
import {useState} from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p>&copy; 2025 IFSul Campus Sapucaia — DevConecta</p>
        <div className={styles["footer-social"]}>
          <a href="#" aria-label="Facebook">
            <img src="/facebook-svgrepo-com.svg" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/instagram-svgrepo-com.svg" alt="Instagram" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}