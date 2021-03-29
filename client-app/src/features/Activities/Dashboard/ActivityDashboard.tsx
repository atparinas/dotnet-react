import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { Activity } from '../../../models/activity';
import { useStore } from '../../../stores/store';
import ActivtyDetails from '../details/ActivityDetails';
import ActivityForm from '../forms/ActivityForm';
import ActivityList from './ActivityList';


const ActivityDashboard : React.FC = () => {

    const {activityStore} = useStore()

    const {selectedActivity, editMode} = activityStore;


    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {   selectedActivity &&  !editMode &&

                    <ActivtyDetails /> 
                }
                {
                    editMode && 
                    <ActivityForm />

                }
            </Grid.Column>
        </Grid>
    );

}

export default observer(ActivityDashboard);