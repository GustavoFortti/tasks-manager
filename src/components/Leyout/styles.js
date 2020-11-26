import styled from 'styled-components';

// MT - Main tasks
// TL - Tasks List
// PL - Peoples
// CY - Cycles

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 271px auto;
    grid-template-rows: 70px auto;

    grid-template-areas:
    'MT CY',
    'PL TL';

    height: 100vh;
`;