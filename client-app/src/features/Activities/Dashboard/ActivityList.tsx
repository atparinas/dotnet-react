import React from 'react';
import { Button, Item, Label, List, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';

interface Props {
    activities: Activity[],
    selectActivity: (id: string) => void
}

const ActivityList : React.FC<Props> = ({activities, selectActivity}) => {


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
                            onClick={() => selectActivity(activity.id)}
                            floated='right' content='View' color='blue' />
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

export default ActivityList;