import styled from 'styled-components';

export const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--secondary);
`;

export const Task = styled.div`
    display: flex;

    height: 90px;
    width: 800px;

    border: 1px solid var(--border);
    
    &:hover {   
        background-color: var(--border);
        cursor: pointer;
    }
`;