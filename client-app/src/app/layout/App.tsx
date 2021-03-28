import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import { Activity } from '../../models/activity';
import agent from '../api/agent';
import LoadingComponents from './LoadingComponents';
import NavBar from './NavBar';
import './styles.css';

function App() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true)

    const getActivites = async () => {
        // const response = await axios.get<Activity[]>('http://localhost:5000/api/activities');

        const response = await agent.Activities.list();

        let formatedActivities : Activity[] = [];

        response.forEach(activity => {
            activity.date = activity.date.split('T')[0];
            formatedActivities.push(activity);
        });

        setActivities(formatedActivities);
        setLoading(false);
    }


    const handleSelectedActivity = (id: string) => {
        setSelectedActivity(activities.find(a => a.id === id))
    }

    const handleCancelSelectActivity = () => {
        setSelectedActivity(undefined);
    }

    const handleFormOpen = (id? : string) => {

        if(!id) handleCancelSelectActivity();

        setEditMode(true);

    }


    const handleFormClose = () => {
        setEditMode(false);
    }


    useEffect(() => {
        getActivites();
    }, []);


    if(loading) return <LoadingComponents content="Loading Application ..." />

    return (
        <div>
            <NavBar openForm={handleFormOpen} />
            <Container style={{marginTop: '5em'}}>
                <ActivityDashboard 
                    activities={activities} 
                    selectedActivity={selectedActivity}
                    selectActivity={handleSelectedActivity}
                    cancelSelectActivity={handleCancelSelectActivity}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                />
            </Container>
        </div>
    );
}

export default App;
