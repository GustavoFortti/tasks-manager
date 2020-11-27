import React from 'react';

import { Container, BoxInput } from './styles'
import { AiOutlineClose } from "react-icons/ai";

function NewManager() {
    return (
        <Container>
            <BoxInput>
                <AiOutlineClose />
                <div>
                    <input></input>
                    <button>Create</button>
                </div>
            </BoxInput>
        </Container>
    )
}

export default NewManager;