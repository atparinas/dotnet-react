import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, List, Segment } from 'semantic-ui-react';
import { useStore } from '../../../stores/store';


const ActivityList : React.FC = () => {

    const [target, setTarget] = useState('');

    const {activityStore} = useStore();

    const {loading, deleteActivity, activities} = activityStore;

    const handleDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name)
        deleteActivity(id);
    }


    const activityList = activities.map((activity) => {
        return (
            <Item key={activity.id}>
                <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city}, {activity.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button 
                            onClick={() => activityStore.selectActivity(activity.id)}
                            floated='right' content='View' color='blue' />
                        <Button
                            name={activity.id}
                            loading={loading && target === activity.id}
                            onClick={(e) => handleDelete(e, activity.id)}
                            floated='right'
                            content='Delete'
                            color='red'
                         />
                        <Label basic content={activity.category} />
                    </Item.Extra>
                </Item.Content>
            </Item> 
        )
    })

    return (
        <Segment>
            <Item.Group divided>
                {activityList}
            </Item.Group>
        </Segment>
       
    )

}

export default observer(ActivityList);