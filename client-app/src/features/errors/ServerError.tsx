import React from "react";
import {useStore} from "../../stores/store";
import {Container, Header, Segment} from "semantic-ui-react";
import { observer } from "mobx-react-lite";

const ServerError : React.FC = () => {

    const {commonStore} = useStore();

    return (
        <Container>
            <Header as='h1' content='Server Error' />
            <Header as='h5' color='red' content={commonStore.error?.message} />
            {commonStore.error?.details &&
                <Segment>
                    <Header as='h4' content='Stack Trace' color='teal' />
                    <code style={{marginTop: '10px'}}>
                        {commonStore.error.details}
                    </code>
                </Segment>
            }

        </Container>
    )

}

export default observer(ServerError);