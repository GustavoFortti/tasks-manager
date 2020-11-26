import styled from 'styled-components';

// MT - Main tasks
// TL - Tasks List
// ML - Member List
// CY - Cycles
// TM - time for ...

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 271px auto 250px;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'MT CY TM',
    'ML TL TM';

    height: 100vh;
    color: white;

    .void {
        background-color: var(--primary);
        /* border: 1px solid var(--border); */
    }
`;