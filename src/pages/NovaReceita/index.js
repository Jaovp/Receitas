import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./nova-receita.css";

function NovaReceita() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [instrucoes, setInstrucoes] = useState("");
  const [imagem, setImagem] = useState(null);

  function handleSubmit(event) {
    navigate("/");
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Adicionar Nova Receita</h1>
        <label>
          Imagem da Receita:
          <input
          imagem={imagem}
            type="file"
            accept="image/*"
            onChange={(e) => setImagem(e.target.files[0])}
          />
        </label>
        <label>
          Nome da Receita:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Ingredientes:
          <textarea
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
        </label>
        <label>
          Instruções:
          <textarea
            value={instrucoes}
            onChange={(e) => setInstrucoes(e.target.value)}
            required
          />
        </label>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
}

export default NovaReceita;