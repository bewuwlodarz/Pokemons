import styled from 'styled-components';

export const SummaryContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  background-color: #f9f9f9;
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SummaryTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const SummaryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SummaryItem = styled.li`
  margin-bottom: 5px;
`;
