import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>Sobre Nós</h3>
          <p>Conheça mais sobre nossa empresa e nossa missão.</p>
        </div>
        <div class="footer-section">
          <h3>Categorias</h3>
          <ul>
            <li>
              <a href="#">Eletrônicos</a>
            </li>
            <li>
              <a href="#">Ferramentas</a>
            </li>
            <li>
              <a href="#">Móveis</a>
            </li>
            <li>
              <a href="#">Acessórios</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contato</h3>
          <p>Entre em contato conosco:</p>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Nome da Empresa. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
