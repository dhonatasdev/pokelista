import React, {
    useEffect,
    useState,
    useContext
} from 'react';
import { useParams } from 'react-router-dom';
import './pokemonView.css';

const PokemonView = () => {
    const [pokemon, setPokemon] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((r) => r.json())
            .then((json) => {
                setPokemon(json);
            });
    }, [name]);

    if (!pokemon) {
        return null;
    }

    return (
        <div className="PokemonView">
            <h1>{pokemon.name}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
            />
            <h3 className='PokemonView'>Abilities</h3>
            <ul className="PokemonView__abilities">
                {pokemon.abilities.map((item) => (
                    <li>{item.ability.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonView;
