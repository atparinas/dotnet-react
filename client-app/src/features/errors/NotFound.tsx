import React from "react";
import {Button, Header, Icon, Segment} from "semantic-ui-react";
import {Link} from "react-router-dom";

const NotFound : React.FC = () => {

    return (
        <Segment placeholder >
            <Header icon>
                <Icon name='search' />
                These are the not the page you are looking for
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/activities' primary>Return to Activities</Button>
            </Segment.Inline>
        </Segment>
    )
}

export default NotFound;