import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Button, Card, Grid, Image} from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../stores/store';
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";



const ActivtyDetails : React.FC  = () => {

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;

    const {id} = useParams<{id: string}>();


    useEffect(() => {
        if(id) loadActivity(id);
    }, [id, loadActivity])


    if(loadingInitial || !activity) return <LoadingComponents /> ;

    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailHeader activity={activity} />
                <ActivityDetailInfo activity={activity} />
                <ActivityDetailChat />
            </Grid.Column>
            <Grid.Column width={6} >
                <ActivityDetailSidebar />
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivtyDetails);