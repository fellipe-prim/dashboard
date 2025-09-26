import React, { useEffect, useState } from "react";

function TabelaInvestimentos() {
    const [investimentos, setInvestimentos] = useState([]);

    useEffect(() => {
        const fetchInvestimentos = async () => {
            const response = await fetch("http://localhost/backend/investimentos.php");
            const data = await response.json();
            setInvestimentos(data);
        };

        fetchInvestimentos();
    }, []);

    return <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
            {investimentos.map((investimento) => (
              <tr key={investimento.id}>
                <td>{investimento.nome}</td>
                <td>{investimento.categoria}</td>
                <td>{investimento.valor}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>;
}

export default TabelaInvestimentos;