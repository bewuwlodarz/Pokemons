import React from 'react';
import { SummaryContainer, SummarySection, SummaryTitle, SummaryList, SummaryItem } from './SummaryStyles';

const Summary = ({ summaryData }) => (
    <SummaryContainer>
            <SummarySection>
                    <SummaryTitle>Total Pokemon Species</SummaryTitle>
                    <p>{summaryData.total}</p>
            </SummarySection>
            <SummarySection>
                    <SummaryTitle>Pokemon by Type</SummaryTitle>
                    <SummaryList>
                            {Object.entries(summaryData.types).map(([type, count]) => (
                                <SummaryItem key={type}>{type}: {count}</SummaryItem>
                            ))}
                    </SummaryList>
            </SummarySection>
            <SummarySection>
                    <SummaryTitle>Pokemon by Generation</SummaryTitle>
                    <SummaryList>
                            {Object.entries(summaryData.generations).map(([gen, count]) => (
                                <SummaryItem key={gen}>Generation {gen}: {count}</SummaryItem>
                            ))}
                    </SummaryList>
            </SummarySection>
    </SummaryContainer>
);

export default Summary;
