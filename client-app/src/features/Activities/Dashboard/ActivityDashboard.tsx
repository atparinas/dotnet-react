import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import ActivtyDetails from '../details/ActivityDetails';
import ActivityForm from '../forms/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string ) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void
}

const ActivityDashboard : React.FC<Props> = ({activities, selectActivity, 
    selectedActivity, cancelSelectActivity, editMode, openForm, closeForm}) => {

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {   selectedActivity &&  !editMode &&
                    <ActivtyDetails activity={selectedActivity} 
                        cancelSelectedActivity={cancelSelectActivity}
                        openForm={openForm} /> 
                }
                {
                    editMode && 
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} />

                }
            </Grid.Column>
        </Grid>
    );

}

export default ActivityDashboard;