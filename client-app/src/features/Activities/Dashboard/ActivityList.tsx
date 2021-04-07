import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';
import ActivityListItem from "./ActivityListItem";


const ActivityList : React.FC = () => {

    const {activityStore} = useStore();

    const {activities} = activityStore;


    const activityList = activities.map((activity) => {
        return <ActivityListItem key={activity.id} activity={activity} />
    })

    return (
        <>
            {activityList}
        </>
       
    )

}

export default observer(ActivityList);