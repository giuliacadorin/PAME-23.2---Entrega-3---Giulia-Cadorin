import React, { useState, useEffect } from "react";
import "./index.css";

const MainContent = (props) => {
  const { categorias, produtos, onSearchTermChange } = props;

  /* Acompanha a variação do tamanho da tela para medir a altura do header e ajustar o margin-top do Main */
  // Adicione um estado para armazenar a altura do cabeçalho
  const [headerHeight, setHeaderHeight] = useState(0);
  // Usa um efeito para obter a altura do cabeçalho quando o componente montar
  useEffect(() => {
    const headerElement = document.querySelector("header");
    if (headerElement) {
      setHeaderHeight(headerElement.clientHeight);
    }
  }, []);

  /* Atualiza a lista de produtos conforme termo de busca */
  const [filteredProdutos, setFilteredProdutos] = useState(produtos);
  useEffect(() => {
    // Atualize os produtos filtrados quando o termo de pesquisa mudar
    setFilteredProdutos(produtos);
  }, [produtos]);

  return (
    <main>
      <div className="container" style={{ marginTop: `${headerHeight}px` }}>
        {/* Verifica se há produtos filtrados */}
        {filteredProdutos.length === 0 ? (
          <p className="sem-produtos">Não há produtos dessa categoria.</p>
        ) : (
          /* Mapeia os produtos filtrados se houver algum */
          filteredProdutos.map((produto, index) => (
            <div key={index} className="item-container">
              <div className="item-img">
                <img
                  src={require(`./produtos/${produto[0]}`)}
                  alt={`Imagem do ${produto[0]}`}
                />
              </div>
              <p className="item-nome">{produto[1]}</p> {/* Nome */}
              <p className="item-descricao">{produto[2]}</p> {/* Descrição */}
              <p className="item-categoria">{produto[4]}</p> {/* Categoria */}
              <p className="item-tamanho">{produto[5]}</p> {/* Tamanho */}
              <p className="item-material">{produto[6]}</p> {/* Material */}
              <p className="item-preco">{produto[7]}</p> {/* Preço */}
              <p>
                <button type="button">Adicionar ao carrinho</button>
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default MainContent;
