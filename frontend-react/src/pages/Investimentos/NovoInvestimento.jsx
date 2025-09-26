import React, { useState } from 'react';
import CategoriaInvestimentos from './CategoriaInvestimentos';
import '../../styles/Investimentos/NovoInvestimentoStyles.css';

function NovoInvestimento() {
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState(0);
  const [nome, setNome] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita reload

    const dadosInvestimento = {
      categoria,
      valor: parseFloat(Number(valor).toFixed(2)),
      nome
    };

    try {
      const response = await fetch("http://localhost/backend/investimentos.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dadosInvestimento)
      });

      const result = await response.json();
      if (result.success) {
        alert("Investimento adicionado com sucesso!");
        setValor("");       // limpa input
        setCategoria(0);    // reseta select
      } else {
        alert("Erro: " + result.message);
      }

    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <>
      <div className="container">
        <h1 id='titulo'>Adicionar novo investimento</h1>
        <form onSubmit={handleSubmit} id='form-novo-investimento'>
          <CategoriaInvestimentos
            categoriaSelecionada={categoria}
            setCategoriaSelecionada={setCategoria}
            id="select-categoria"
          />
          <input type="hidden" value={categoria} />
          <input
            type="text"
            value={nome}
            placeholder='Nome do investimento'
            onChange={(e) => setNome(e.target.value)}
            id='nome-investimento'
          />
          <input
            type="number"
            step="0.01"
            placeholder="Valor investido"
            value={valor}
            onChange={(e) => {
              const num = parseFloat(e.target.value);
              if (!isNaN(num) && num > 0) {
                setValor(num.toFixed(2));
              } else {
                setValor("");
              }
            }}
            id='input-valor'
          />

          <button id='btn-adicionar' onClick={() => console.log(valor)} type="submit">Adicionar</button>
        </form>
      </div>

    </>
  );
}

export default NovoInvestimento;