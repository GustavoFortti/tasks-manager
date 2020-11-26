import React from 'react';
import { List, Member, Info, Add, Separator } from './styles'
import { AiOutlineDown, AiOutlinePlus } from "react-icons/ai";

function MemberList() {
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
            <Member>
                <Info>
                    <p>1</p>
                    <p>Gustavo Dutra</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Member>
            <Member>
                <Info>
                    <p>1</p>
                    <p>Camila Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Member>
            <Member>
                <Info>
                    <p>1</p>
                    <p>Disgo Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Member>
            <Member>
                <Info>
                    <p>3</p>
                    <p>Bruno Sobrenome</p>
                </Info>
                <div className='icon'>
                    <AiOutlineDown />
                </div>
            </Member>
        </List>
    )
}

export default MemberList;