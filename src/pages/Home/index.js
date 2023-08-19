import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import api from "../../service/api";

function Home(){
    const [ receitas, setReceitas ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function loadReceitas(){
            try {
                const response = await api.get('https://www.themealdb.com/api/json/v1/1/search.php?s=', {
                    params: {
                        api_key: '1', 
                        language: 'pt-BR',
                        page: 1,
                    }
                });

                setReceitas(response.data.meals);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setLoading(false);
            }
        }

        loadReceitas();
    }, []);

    if(loading){
        return( 
            <div className="loading">
                <h1>Carregando...</h1>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="lista-receitas">
                {receitas.map((receita) => {
                    return(
                        <div className="receita" key={receita.idMeal}>
                            <img src={receita.strMealThumb} alt="Imagem da receita" />
                            <h1>{receita.strMeal}</h1>
                            <Link to={`/receita/${receita.idMeal}`}>Ver receita</Link>
                        </div>
                    )
                } )}
            </div>
        </div>
    );
}

export default Home;
