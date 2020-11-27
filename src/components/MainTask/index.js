import React, { useState } from 'react';
import { Main, Options, More } from './styles'
import { AiOutlineDown, AiFillPlusCircle } from "react-icons/ai";
import NewManager from '../NewManager/index'

function MainTask() {
    const [ windown, setWindown ] = useState(false);
    
    return (
        <Main>
            <Options>
                <p>Task about.. </p>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Options>
            <More>
                <AiFillPlusCircle onClick={(event) => setWindown(true)} />
                { windown == true ?  <NewManager /> :  <></> }
            </More>

        </Main>
    )
}

export default MainTask;