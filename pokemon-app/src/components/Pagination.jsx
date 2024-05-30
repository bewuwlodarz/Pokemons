import React from 'react';
import { PaginationContainer, PaginationButton } from './PaginationStyles';

const Pagination = ({ pageCount, pageIndex, gotoPage }) => (
    <PaginationContainer>
        {Array.from({ length: pageCount }, (_, index) => (
            <PaginationButton
                key={index}
                onClick={() => gotoPage(index)}
                disabled={pageIndex === index}
            >
                {index + 1}
            </PaginationButton>
        ))}
    </PaginationContainer>
);

export default Pagination;
