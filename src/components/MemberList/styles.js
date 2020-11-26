import styled from 'styled-components';

export const List = styled.div`
    /* display: flex; */
    /* flex-direction:column; */
    align-items: center;
    background-color: var(--primary);

    overflow-y: scroll;

    padding-top: 3px;

    color: white;

    border: 1px solid var(--border);

    ::-webkit-scrollbar {
        display: none;
    }

`;

export const Member = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 20px;
    align-items: center;
    color: white;

    .icon {
        display: none;

        width: 15px;
        height: 15px;

        justify-content: center;
        align-items: center;
    }

    &:hover {
        background-color: #282132;
        /* background-color: #524263; */
        cursor: pointer;
        .icon {
            display: flex;
        }
    }
    background-color: var(--primary);
    
`

export const Info = styled.div`
    width: 210px;
    height: 50px;

    display: flex;

    p {
        margin-left: 15px;
    }

    align-items: center;
`

export const Add = styled.div`
    display: flex;

    align-items: center;
    padding: 20px;

    width: 100%;
    height: 50px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        border-radius: 30px;

        &:hover {
            background-color: var(--border);
            cursor: pointer;
        }
    }

    .add-member {
        width: 190px;
    }

    .add-task {
        width: 150px;
    }

    p {
        padding: 15px;
    }

`

export const Separator = styled.div`
    display: flex;

    margin-bottom: 15px;

    width: 100%;
    height: 1px;
    border-radius: 10px;
    background-color: var(--secondary);
`;