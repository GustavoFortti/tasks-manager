import React from 'react';
import { Tasks, Task, Left, Separator, Scope, TaskName, Members, Loading, Middle, Entity } from './styles'
import { AiOutlinePlayCircle, AiFillPlusCircle, AiFillCheckSquare } from "react-icons/ai";

function TasksList() {
    return (
        <Tasks>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Gustavdo Duta</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>até 4 pessoas</Entity>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Gustavo Dutra</Entity>
                            <Entity>Gustavo D</Entity>
                            <Entity>Gust Dutra</Entity>
                            <Entity>Gustavdo Duta</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>até 4 pessoas</Entity>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Gustavo Dutra</Entity>
                            <Entity>Gustavo D</Entity>
                            <Entity>Gust Dutra</Entity>
                            <Entity>Gustavdo Duta</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Gustavo D</Entity>
                            <Entity>Gust Dutra</Entity>
                            <Entity>Gustavdo Duta</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>até 4 pessoas</Entity>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Gustavo Dutra</Entity>
                            <Entity>Gustavo D</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>até 4 pessoas</Entity>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
             <Task>
                <Left>
                    <Loading>
                        <AiOutlinePlayCircle />
                    </Loading>
                    <Separator />
                    <Middle>
                        <TaskName>
                            <AiFillCheckSquare />
                            <p>Task Name</p>
                        </TaskName>
                        <Members>
                            <Entity>Dutra</Entity>
                            <Entity>Gustavo D</Entity>
                            <Entity>Gust Dutra</Entity>
                            <Entity>Gustavdo Duta</Entity>
                        </Members>
                    </Middle>
                </Left>
                <Separator />
                <Scope>
                    <p>Scope</p>
                    <div>
                        <Entity>até 4 pessoas</Entity>
                        <Entity>3 - 3 or 2 - 3</Entity>
                    </div>
                </Scope>
            </Task>
        </Tasks>
    )
}

export default TasksList;