import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../stores/store';
import ActivityList from './ActivityList';


const ActivityDashboard : React.FC = () => {

    const {activityStore} = useStore()
    const {loadingInitial, activities, loadActivities} = activityStore;


    useEffect(() => {
        if(activities.length === 0) loadActivities();
    }, [loadActivities]);


    if(loadingInitial) return <LoadingComponents content="Loading Application ..." />


    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            {/* <Grid.Column width='6'>
                {   selectedActivity &&  !editMode &&

                    <ActivtyDetails /> 
                }
                {
                    editMode && 
                    <ActivityForm />

                }
            </Grid.Column> */}
        </Grid>
    );

}

export default observer(ActivityDashboard);