import React, { useState } from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

// Os arrays com as categorias e produtos são passados para os componentes, facilitando assim a atualização do código com as informações reais.

let categorias = [
  "Todas as Categorias",
  "Eletrônicos",
  "Ferramentas",
  "Móveis",
  "Acessórios",
];
// Array produtos: imagem, nome, detalhe, descrição, categoria, tamanho, material e preço;
let produtos = [
  [
    "alicate.jpg",
    "Alicate de Bico Longo Fino 5,5''",
    "Utilizado para bijuterias, reparos em aparelhos eletrônicos, jardinagem, pescaria, etc.",
    "O Alicate de ponta longa, é utilizado em diversos segmentos, com o intuito de puxar, torcer, dobrar, enrolar, segurar e cortar fios ou arames de diferentes espessuras, fabricado em aço especial com acabamento polido, para o aumento da vida útil da peça. Com cabo ergonômico arredondado, para melhor conforto e segurança no manuseio. Com articulação suave, fazendo que o operador aplique menos força sobre o alicate, seu bico, pensado justamente para a utilização do produto em locais de difícil acesso.",
    "Ferramentas",
    "5,5'' (155mm)",
    "Aço especial",
    "R$ 10,00",
  ],
  [
    "chevefenda.jpeg",
    "Chave de fenda",
    "Apertar parafusos.",
    "Descrição",
    "Ferramentas",
    "Portátil",
    "Metal",
    "R$ 30,00",
  ],
  [
    "cama_solteiro.jpeg",
    "Cama de solteiro",
    "Para 1 pessoa dormir.",
    "Descrição",
    "Móveis",
    "Solteiro",
    "Madeira",
    "R$ 1900,00",
  ],
  [
    "cama_casal.jpeg",
    "Cama de casal",
    "Para o casal dormir.",
    "Descrição",
    "Móveis",
    "Casal",
    "Madeira",
    "R$ 3900,00",
  ],
];
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredProdutos, setProdutosFiltrados] = useState(produtos);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const filtrarProdutosPorCategoria = (categoria) => {
    if (categoria === "Todas as Categorias") {
      // Se "Todas as Categorias" for clicado, mostrar todos os produtos
      setProdutosFiltrados(produtos);
      setCategoriaSelecionada(null);
    } else if (categoria === categoriaSelecionada) {
      // Se a mesma categoria for clicada novamente, limpe a seleção
      setProdutosFiltrados(produtos);
      setCategoriaSelecionada(null);
    } else {
      // Filtrar produtos com base na categoria clicada
      const produtosFiltrados = produtos.filter(
        (produto) => produto[4] === categoria
      );
      setProdutosFiltrados(produtosFiltrados);
      setCategoriaSelecionada(categoria);
    }
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);

    // Filtrar os produtos com base no termo de pesquisa
    const lowerCaseSearchTerm = term.toLowerCase();
    const filtered = produtos.filter((produto) =>
      produto[1].toLowerCase().includes(lowerCaseSearchTerm)
    );
    setProdutosFiltrados(filtered);
  };

  return (
    <div>
      <Header
        categorias={categorias}
        produtos={produtos}
        onSearchTermChange={handleSearchTermChange}
        onCategoriaClick={filtrarProdutosPorCategoria}
      />
      <Main categorias={categorias} produtos={filteredProdutos} />
      <Footer />
    </div>
  );
};

export default App;
