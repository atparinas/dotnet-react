import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
    activity: Activity | undefined,
    closeForm: () => void
}

const ActivityForm : React.FC<Props> = ({activity: selectedActivity, closeForm}) => {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState)


    const handleSubmit = () => {
        console.log(activity);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setActivity({...activity, [name]: value})
    }

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

                <Button floated='right' positive type='submit' content='Submit' />
                <Button 
                    onClick={closeForm}
                    floated='right' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ActivityForm;