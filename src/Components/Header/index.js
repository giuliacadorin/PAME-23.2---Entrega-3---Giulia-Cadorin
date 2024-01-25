import React, { useState, useEffect } from "react";
import "./index.css";

import sandwich from "./images/sandwich.png";
import x from "./images/X.png";
import carrinho from "./images/carrinho.png";
import lupa from "./images/lupa.png";
import logo from "./images/logo.png";

const Header = (props) => {
  const { categorias, produtos, onSearchTermChange, onCategoriaClick } = props;

  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [cartSidebarVisible, setCartSidebarVisible] = useState(false); // Adicionado estado para o sidebar do carrinho
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogin = () => {
    const maskedPassword = "*".repeat(password.length);

    alert(`Dados para login:\n\n Email: ${email}\n Senha: ${maskedPassword}`);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    // Certifica de fechar o sidebar do carrinho quando o sidebar principal for aberto
    setCartSidebarVisible(false);
  };

  const toggleCartSidebar = () => {
    setCartSidebarVisible(!cartSidebarVisible);
    // Certifica de fechar o sidebar principal quando o sidebar do carrinho for aberto
    setSidebarVisible(false);
  };

  const handleSearch = () => {
    // Lógica para realizar a ação desejada com o termo de pesquisa
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    // Atualize o termo de pesquisa usando a propriedade passada
    onSearchTermChange(lowerCaseSearchTerm);
  };

  const handleCategoriaClick = (categoria) => {
    // Lidar com o clique na categoria
    onCategoriaClick(categoria);
    setSidebarVisible(false);
  };

  const handleFinalizarCompra = () => {
    // Lógica para finalizar a compra
    alert("Compra finalizada!"); // Exemplo simples, ajuste conforme necessário
  };

  return (
    <header>
      {/* cria um sidebar com as categorias da loja */}
      {sidebarVisible && (
        <div className={`sidebar ${sidebarVisible ? "active" : ""}`}>
          <button className="sidebar-x" onClick={toggleSidebar}>
            <img src={x} alt="x" className="sidebar-x img" />
          </button>

          {/* Adicione informações ao sidebar */}
          <div className="sidebar-content">
            <h3>Categorias</h3>
            <ul>
              {categorias.map((categoria) => (
                <li
                  key={categoria}
                  onClick={() => handleCategoriaClick(categoria)}
                >
                  <a>{categoria}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* cria um sidebar que possibilita ver os itens adicionados ao carrinho */}
      {cartSidebarVisible && (
        <div className={`cart-sidebar ${cartSidebarVisible ? "active" : ""}`}>
          <button className="cart-sidebar-x" onClick={toggleCartSidebar}>
            <img src={x} alt="x" className="cart-sidebar-x img" />
          </button>
          <p> Meu carrinho.</p>

          {/* Botão "Finalizar Compra" */}
          <button
            className="finalizar-compra-button"
            onClick={handleFinalizarCompra}
          >
            Finalizar Compra
          </button>
        </div>
      )}

      <div className={`header-content ${sidebarVisible ? "active" : ""}`}>
        <div>
          <button className="sandwich" onClick={toggleSidebar}>
            <img src={sandwich} alt="sanduiche" className="sandwich img"></img>
          </button>
        </div>

        <div className="logo-container">
          <img src={logo} alt="logo"></img>
        </div>

        <div className="search-div">
          <input
            type="text"
            placeholder="Buscar nomes dos produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button className="search-button" onClick={handleSearch}>
            <img src={lupa} alt="lupa" />
          </button>
        </div>

        <div className="user-actions">
          <div>
            <input
              className="email-input"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="password-input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="login-button"
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
          <div>
            <p className="cadastro">
              Ainda não tem uma conta?&nbsp;
              <a href="/cadastro">Cadastre-se aqui</a>
            </p>
          </div>
        </div>

        <div className="div-carrinho">
          <button className="carrinho" onClick={toggleCartSidebar}>
            <img src={carrinho} alt="carrinho"></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
