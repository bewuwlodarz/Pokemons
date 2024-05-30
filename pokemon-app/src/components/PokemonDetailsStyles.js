import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PokemonCard = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

export const PokemonName = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 10px 0;
`;

export const PokemonInfo = styled.p`
  font-size: 18px;
  color: #555;
  margin: 5px 0;
`;

export const EvolutionLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
