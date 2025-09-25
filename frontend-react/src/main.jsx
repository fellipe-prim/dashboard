import React from "react";
import ReactDOM from "react-dom/client";
import NovoInvestimento from "./pages/Investimentos/NovoInvestimento.jsx";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <div>
      <h1>Novo Investimento</h1>
      <NovoInvestimento />
    </div>
  </React.StrictMode>
);
