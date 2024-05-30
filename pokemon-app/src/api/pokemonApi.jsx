import axios from '../axios-config';

export const fetchPokemonData = async () => {
    const response = await axios.get('/api/pokemons');
    return response.data.map(pokemon => ({
        number: pokemon.number,
        name: pokemon.name,
        generation: pokemon.generation,
        height: pokemon.height,
        weight: pokemon.weight,
        type1: pokemon.types[0],
        type2: pokemon.types[1] || null,
        movesCount: pokemon.moves.length,
        image: pokemon.image,
    }));
};
export const fetchPokemonDetails = async (number) => {
    const response = await axios.get(`/api/pokemon/${number}`);
    const data = response.data;
    return {
        number: data.number,
        name: data.name,
        generation: data.generation,
        height: data.height,
        weight: data.weight,
        type1: data.types[0],
        type2: data.types[1] || null,
        movesCount: data.moves.length,
        imageUrl: data.image,
        evolutionFrom: data.evolution.from,
        evolutionTo: data.evolution.to ? data.evolution.to[0] : null,
        evolutionFromNumber: data.evolution.fromNumber,
        evolutionToNumber: data.evolution.toNumber ? data.evolution.toNumber[0] : null
    };
};
