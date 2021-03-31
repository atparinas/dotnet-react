import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../stores/store';
import { v4 as uuid } from 'uuid';


const ActivityForm : React.FC = () => {

    const {activityStore} = useStore();
    const {loadActivity, 
        loading, createActivity, updateActivity, loadingInitial} = activityStore

    const {id} = useParams<{id: string}>()
    const history = useHistory();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])


    const handleSubmit = () => {
        // activity.id ? updateActivity(activity) : createActivity(activity);
        if(activity.id.length === 0){

            const newActivity = {
                ...activity,
                id: uuid()
            }

            createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))

        }else {
            
            updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setActivity({...activity, [name]: value})
    }

    if(loadingInitial) return <LoadingComponents content='Loading Activity..' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input 
                    value={activity.title}
                    name='title'
                    onChange={handleInputChange}
                    placeholder='Title' />

                <Form.TextArea 
                    value={activity.description}
                    name='description'
                    onChange={handleInputChange}
                    placeholder='Description' />

                <Form.Input 
                     value={activity.category}
                     name='category'
                     onChange={handleInputChange}
                    placeholder='Category' />

                <Form.Input type='date'
                    value={activity.date}
                    name='date'
                    onChange={handleInputChange}
                    placeholder='Date' />

                <Form.Input
                    value={activity.city}
                    name='city'
                    onChange={handleInputChange} 
                    placeholder='City' />

                <Form.Input
                    value={activity.venue}
                    name='venue'
                    onChange={handleInputChange} 
                    placeholder='Venue' />

                <Button 
                    loading={loading}
                    floated='right' positive type='submit' content='Submit' />
                <Button 
                    as={Link} to={id ? `/activities/${id}` : '/activities'}
                    floated='right' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default observer(ActivityForm);