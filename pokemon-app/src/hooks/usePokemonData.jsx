import { useState, useEffect } from 'react';
import { fetchPokemonData } from '../api/pokemonApi';

const usePokemonData = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [summaryData, setSummaryData] = useState({ total: 0, types: {}, generations: {} });

    useEffect(() => {
        fetchPokemonData()
            .then(data => {
                setPokemonData(data);
                calculateSummary(data);
            })
            .catch(error => console.log(error));
    }, []);

    const calculateSummary = (data) => {
        const total = data.length;
        const types = {};
        const generations = {};

        data.forEach(pokemon => {
            types[pokemon.type1] = (types[pokemon.type1] || 0) + 1;
            if (pokemon.type2) {
                types[pokemon.type2] = (types[pokemon.type2] || 0) + 1;
            }
            generations[pokemon.generation] = (generations[pokemon.generation] || 0) + 1;
        });

        setSummaryData({ total, types, generations });
    };

    return { pokemonData, summaryData };
};

export default usePokemonData;
