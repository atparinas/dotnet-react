import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, Header, Image, Segment} from 'semantic-ui-react';

const HomePage : React.FC = () => {

    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
                <Header as='h1' inverted >
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{marginBottom: 12}} />
                    Reactivities
                </Header>
                <Header as='h2' inverted content='Welcome to Reactivities' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Take me to the Activities
                </Button>
            </Container>
        </Segment>
        // <Container style={{marginTop: '5em'}}>
        //     <h1>Home Page</h1>
        //     <h3>Go To <Link to='/activities'>Activities</Link> </h3>
        // </Container>
    )
}

export default HomePage;