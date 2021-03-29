import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Container, Header, List } from 'semantic-ui-react';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import { Activity } from '../../models/activity';
import { useStore } from '../../stores/store';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';
import NavBar from './NavBar';
import './styles.css';

function App() {

    const {activityStore} = useStore()

    useEffect(() => {
        activityStore.loadActivities();
    }, []);


    if(activityStore.loadingInitial) return <LoadingComponents content="Loading Application ..." />

    return (
        <div>
            <NavBar />
            <Container style={{marginTop: '5em'}}>
                <ActivityDashboard />
            </Container>
        </div>
    );
}

export default observer(App);
