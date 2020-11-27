import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0%;
    left: 0%;

    justify-content: center;

    height: 100%;
    width: 100%;

    background-color: rgba(255, 255, 255, 0.04);

    cursor: auto;
`;

export const BoxInput = styled.div`
    display: flex;

    margin-top: 5%;
    height: 200px;
    width: 600px;

    border-radius: 7px;

    background-color: var(--primary);
`