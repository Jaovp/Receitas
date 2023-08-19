import { Link } from "react-router-dom";
import './erro.css';

function Erro(){
    return(
        <section className="not-found">
            <h1>Ops! Página não encontrada!</h1>
            <Link to="/" className="erro-link">Voltar para a página inicial</Link>
        </section>
    );
}

export default Erro;