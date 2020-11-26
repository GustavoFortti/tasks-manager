import { React, IconContext } from 'react';
import { Main, Options, More } from './styles'
import { AiOutlineDown, AiFillPlusCircle } from "react-icons/ai";

function MainTask() {


    return (
        <Main>
            <Options>
                <p>Task about.. </p>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Options>
            <More>
                <AiFillPlusCircle />
            </More>
        </Main>
    )
}

export default MainTask;