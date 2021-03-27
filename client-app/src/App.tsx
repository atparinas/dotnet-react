import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import './App.css';

function App() {
    const [activities, setActivities] = useState([]);

    const getActivites = async () => {
        const response = await axios.get('http://localhost:5000/api/activities');

        setActivities(response.data);
    }

    useEffect(() => {
        getActivites();
    }, []);


    return (
        <div className="ui container">
            <Header as='h2'>Activities</Header>
            <List>
                {activities.map((activity: any) => <List.Item key={activity.id} >{activity.title}</List.Item>)}
            </List>
        </div>
    );
}

export default App;
