import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
