import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonDetails } from '../api/pokemonApi';
import { PokemonCard, PokemonImage, PokemonName, PokemonInfo, EvolutionLink } from './PokemonDetailsStyles';

const PokemonDetails = () => {
    const { number } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetchPokemonDetails(number)
            .then(setPokemon)
            .catch(error => console.log(error));
    }, [number]);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <PokemonCard>
            <PokemonImage src={pokemon.imageUrl} alt={pokemon.name} />
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonInfo>Number: {pokemon.number}</PokemonInfo>
            <PokemonInfo>Generation: {pokemon.generation}</PokemonInfo>
            <PokemonInfo>Height: {pokemon.height}</PokemonInfo>
            <PokemonInfo>Weight: {pokemon.weight}</PokemonInfo>
            <PokemonInfo>Type 1: {pokemon.type1}</PokemonInfo>
            <PokemonInfo>Type 2: {pokemon.type2}</PokemonInfo>
            <PokemonInfo>Moves Count: {pokemon.movesCount}</PokemonInfo>
            <PokemonInfo>
                Evolution From: {pokemon.evolutionFrom && <EvolutionLink to={`/pokemon/${pokemon.evolutionFromNumber}`}>{pokemon.evolutionFrom}</EvolutionLink>}
            </PokemonInfo>
            <PokemonInfo>
                Evolution To: {pokemon.evolutionTo && <EvolutionLink to={`/pokemon/${pokemon.evolutionToNumber}`}>{pokemon.evolutionTo}</EvolutionLink>}
            </PokemonInfo>
        </PokemonCard>
    );
};

export default PokemonDetails;
