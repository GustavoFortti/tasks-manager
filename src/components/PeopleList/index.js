import React from 'react';
import { List, People, Info, Add, Separator } from './styles'
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";

function PeopleList() {
    return (
        <List>
            <Add>
                <div className="add-member">
                    <AiOutlinePlus />
                    <p>Member</p>
                </div>
                <div className="add-task">
                    <AiOutlinePlus />
                    <p>Task</p>
                </div>
            </Add>
            <Separator />
            <People>
                <Info>
                    <p>1</p>
                    <p>Gustavo Dutra</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </People>
            <People>
                <Info>
                    <p>1</p>
                    <p>Camila Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </People>
            <People>
                <Info>
                    <p>1</p>
                    <p>Disgo Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </People>
            <People>
                <Info>
                    <p>3</p>
                    <p>Bruno Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </People>
        </List>
    )
}

export default PeopleList;