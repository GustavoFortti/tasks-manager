import React from 'react';

import { Grid } from './styles'
import Cycle from '../Cycle/index'
import MainTask from '../MainTask/index'
import MemberList from '../MemberList/index'
import TasksList from '../TasksList/index'
import RestTime from '../RestTime/index'

function Leyout() {
    return(
        <Grid>
            <MainTask>
            </MainTask>

            <Cycle>
            </Cycle>

            <div className='void'>
            </div>

            <MemberList>
            </MemberList>

            <TasksList>
            </TasksList>

            <RestTime>
            </RestTime>
        </Grid>
    )
}

export default Leyout;