import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return(
        <header>
            <Link className="logo" to="/">Super Receitas 🧑‍🍳</Link>
            <Link className="salvas" to="/ReceitasSalvas">Receitas Salvas ❤️</Link>
            <Link className="new" to="/NovaReceita">Nova Receita 🔪</Link>
        </header>
    );
}

export default Header;