import { useEffect, useState } from "react";
import './receitas-salvas.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ReceitasSalvas() {
    const [receitas, setReceitas] = useState([]);

    useEffect(()=> {
        const receitasSalvas = localStorage.getItem('receitasSalvas');
        setReceitas(JSON.parse(receitasSalvas) || []);
    }, []);

    function excluirReceita(id) {
        let filtro = receitas.filter((receita) => {
            return receita.idMeal !== id;
        })

        setReceitas(filtro);
        localStorage.setItem('receitasSalvas', JSON.stringify(filtro))
        toast.success('Receita excluída com sucesso!');
    }

    return(
        <div className="receitas-salvas">
            <h1>Receitas Salvas</h1>
            {receitas.length === 0 && <p>Você não possui nenhuma receita salva.</p>}
            <ul>
                {receitas.map((receita) => {
                    return(
                        <li key={receita.id}>
                        <span>{receita.title}</span>
                            <div>
                            <Link to={`/receita/${receita.idMeal}`}>{receita.strMeal}</Link>
                            <button className="excluir" onClick={() => excluirReceita(receita.idMeal)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ReceitasSalvas;