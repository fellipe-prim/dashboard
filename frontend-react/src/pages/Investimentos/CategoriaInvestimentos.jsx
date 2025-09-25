import React from "react";

function CategoriaInvestimentos({ categoriaSelecionada, setCategoriaSelecionada }) {
  const categorias = [
    { id: 0, nome: "Selecione uma categoria" },
    { id: 1, nome: "Ações" },
    { id: 2, nome: "Renda Fixa" },
    { id: 3, nome: "Fundos Imobiliários" },
    { id: 4, nome: "Criptomoedas" },
    { id: 5, nome: "ETFs" },
  ];

  return (
    <select
      value={categoriaSelecionada}
      onChange={(e) => setCategoriaSelecionada(Number(e.target.value))}
    >
      {categorias.map((categoria) => (
        <option key={categoria.id} value={categoria.id}>
          {categoria.nome}
        </option>
      ))}
    </select>
  );
}

export default CategoriaInvestimentos;
