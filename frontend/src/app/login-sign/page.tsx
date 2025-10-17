import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./page.module.css";
import { useState } from "react";

export default function LoginRegister() {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div className="form-box login">
        <form action="#">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Email" required />
            <i className="bi bi-envelope-fill"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required />
            <i className="bi bi-lock-fill"></i>
          </div>
          <div className="forgot-link">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button className="btn btn-primary" type="submit">
            Entrar
          </button>
        </form>
      </div>

           <div className="form-box register">
        <form action="#">
          <h1>Crie sua conta</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bi bi-person-fill"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="bi bi-envelope-fill"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bi bi-lock-fill"></i>
          </div>
          <button className="btn btn-primary" type="submit">
            Concluir
          </button>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Boas vindas!</h1>
          <p>Você é novo aqui?</p>
          <button type="button" id="register-btn" className="btn btn-outline-light register-btn" onClick={() => setIsActive(true)}>
            Cadastre-se
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Boas vindas!</h1>
          <p>Já faz parte do DevConecta?</p>
          <button type="button" id="login-btn" className="btn btn-outline-light login-btn" onClick={() => setIsActive(false)}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}