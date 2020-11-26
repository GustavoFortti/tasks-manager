import React from 'react';

import { Grid } from './styles'
import Cycle from '../Cycle/index'
import MainTask from '../MainTask/index'
import PeopleList from '../PeopleList/index'
import TasksList from '../TasksList/index'

function Leyout() {
    return(
        <Grid>
            <MainTask>
            </MainTask>

            <Cycle>
            </Cycle>

            <PeopleList>
            </PeopleList>

            <TasksList>
            </TasksList>
        </Grid>
    )
}

export default Leyout;