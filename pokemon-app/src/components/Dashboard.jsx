import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import usePokemonData from '../hooks/usePokemonData';
import Summary from './Summary';
import Filters from './Filters';
import Pagination from './Pagination';
import { DashboardContainer, Title, PokemonTable } from './DashboardStyles';

const Dashboard = () => {
    const { pokemonData, summaryData } = usePokemonData();

    const data = useMemo(() => pokemonData, [pokemonData]);

    const columns = useMemo(() => [
        {
            Header: 'Number',
            accessor: 'number'
        },
        {
            Header: 'Name',
            accessor: 'name',
            Cell: ({ value, row }) => <Link to={`/pokemon/${row.original.number}`}>{value}</Link>
        },
        {
            Header: 'Generation',
            accessor: 'generation'
        },
        {
            Header: 'Height',
            accessor: 'height'
        },
        {
            Header: 'Weight',
            accessor: 'weight'
        },
        {
            Header: 'Type 1',
            accessor: 'type1'
        },
        {
            Header: 'Type 2',
            accessor: 'type2'
        },
        {
            Header: 'Moves Count',
            accessor: 'movesCount'
        },
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setFilter,
        gotoPage,
        pageCount,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageSize: 25 },
        },
        useFilters,
        useSortBy,
        usePagination
    );

    const { pageIndex } = state;

    return (
        <DashboardContainer>
            <Title>Pokemon Dashboard</Title>
            <Summary summaryData={summaryData} />
            <Filters
                setFilter={setFilter}
                types={Object.keys(summaryData.types)}
                generations={Object.keys(summaryData.generations)}
            />
            <div>
                <h2>Pokemon List</h2>
                <PokemonTable {...getTableProps()}>
                    <thead>
                    {headerGroups.map((headerGroup, headerGroupIndex) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={columnIndex}>
                                    {column.render('Header')}
                                    <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row, rowIndex) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={rowIndex}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td {...cell.getCellProps()} key={cellIndex}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                    </tbody>
                </PokemonTable>
                <Pagination pageCount={pageCount} pageIndex={pageIndex} gotoPage={gotoPage} />
            </div>
        </DashboardContainer>
    );
};

export default Dashboard;
