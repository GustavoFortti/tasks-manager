import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding: 10px;

    border: 1px solid var(--border);
    background-color: var(--primary);
`;

export const CycleButton = styled.div`
    display: flex;

    height: 100%;
    width: 53px;
    margin-left: 20px;

    align-items: center;
    justify-content: center;

    font-size: 25px;
    color: white;

    border: 1px solid var(--border);
    border-radius: 7px;
    cursor: pointer;

    &:hover {
        background-color: var(--border);
    }
`;