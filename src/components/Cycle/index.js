import React from 'react';

import { Container, CycleButton } from './styles'
import { AiOutlinePlus } from "react-icons/ai";

function Cycle() {
    return (
        <Container>
            <CycleButton>
                <AiOutlinePlus />
            </CycleButton>
            <CycleButton>
                <p>I</p>
            </CycleButton>
            <CycleButton>
                <p>P</p>
            </CycleButton>
        </Container>
    )
}

export default Cycle;