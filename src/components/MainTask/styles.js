import styled from 'styled-components';

export const Main = styled.div`
    display: flex;

    color: white;
    align-items: center;
    padding: 25px;

    border: 5px;
    border-color: white;

    flex-direction: row;
    justify-content:space-between;

    background-color: var(--primary);

    /* #524263 */

    border: 1px solid var(--border);



`;

export const Options = styled.div`
    width: 80%;
    height: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 30px;
    padding: 15px;
    cursor: pointer;

    .icon {
        display: none;

        width: 15px;
        height: 15px;

        justify-content: center;
        align-items: center;
    }

    &:hover {
        background-color: var(--border);

        .icon {
            display: flex;
        }
    }

    p {
        width: 150px;
    }



`;

export const More = styled.div`
    display: flex;
    height: 25px;
    width: 25px;

    align-items: center;
    justify-content: center;
    border-radius: 25px;

    &:hover {
        background-color: var(--border);
    }

    cursor: pointer;
`;