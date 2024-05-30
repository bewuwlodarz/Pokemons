import React from 'react';
import { FiltersContainer, FiltersTitle, FilterInput, FilterSelect } from './FilterStyles';

const Filters = ({ setFilter, types, generations }) => (
    <FiltersContainer>
        <FiltersTitle>Filters</FiltersTitle>
        <FilterInput
            type="text"
            placeholder="Number"
            onChange={(e) => setFilter('number', e.target.value)}
        />
        <FilterInput
            type="text"
            placeholder="Name"
            onChange={(e) => setFilter('name', e.target.value)}
        />
        <FilterSelect onChange={(e) => setFilter('type1', e.target.value)}>
            <option value="">All Types</option>
            {types.map(type => (
                <option key={type} value={type}>{type}</option>
            ))}
        </FilterSelect>
        <FilterSelect onChange={(e) => setFilter('generation', e.target.value)}>
            <option value="">All Generations</option>
            {generations.map(gen => (
                <option key={gen} value={gen}>{gen}</option>
            ))}
        </FilterSelect>
    </FiltersContainer>
);

export default Filters;
