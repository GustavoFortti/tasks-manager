import styled from 'styled-components';

export const Tasks = styled.div`
    flex-direction: column;
    background-color: var(--secondary);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }   
`;

export const Task = styled.div`
    display: flex;
    flex-direction: row;

    margin-top: 13px;

    align-items: center;
    justify-content: center;
    /* border-radius: 10px; */
    /* &:hover {   
        background-color: var(--border);
        cursor: pointer;
    } */
`;

export const Left = styled.div`
    display: flex;
    flex-direction: row;

    height: 75px;
    width: 55%;
    /* margin-top: 12px;
    margin-left: 12px; */

    align-items: center;
    /* box-shadow: 1px 1px var(--border); */
    background-color: var(--primary);

`;

export const Loading = styled.div`
    display: flex;
    flex-direction: row;

    width: 80px;
    height: 100%;

    align-items: center;
    justify-content: center;

    font-size: 23px;

    padding-bottom: 15px;
    
    &:hover {   
        color: var(--green);

        /* background-color: var(--border); */
        cursor: pointer;
    }
`;

export const Separator = styled.div`
    display: flex;

    height: 65px;
    width: 1px;

    background-color: var(--border);
`;

export const Middle = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 35px;
    padding-right: 35px;
`;

export const TaskName = styled.div`
    display: flex;
    flex-direction: row;
    /* padding-bottom: 10px; */

    font-size: 18px;

    p {
        font-size: 15px;
        padding-left: 10px;
    }

`;

export const Members = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 30px;
`;

export const Scope = styled.div`
    display: flex;
    flex-direction: column;

    height: 75px;
    width: 43%;

    /* margin-top: 12px; */
    padding-left: 30px;
    justify-content: center;

    background-color: var(--primary);

    div {
        display: flex;
        flex-direction: row;
    }

    p {
        font-size: 15px;
    }
`;

export const Entity = styled.p`
    height: 25px;

    padding-top: 3px;
    padding-left: 15px;
    padding-right: 15px;

    border-radius: 15px;
    margin-left: 7px;
    margin-top: 10px;

    background-color: var(--secondary);

    &:hover {   
        cursor: pointer;
        background-color: var(--border);
    }
`;