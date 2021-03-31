import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const HomePage : React.FC = () => {

    return (
        <Container style={{marginTop: '5em'}}>
            <h1>Home Page</h1>
            <h3>Go To <Link to='/activities'>Activities</Link> </h3>
        </Container>
    )
}

export default HomePage;