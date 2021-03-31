import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';



const NavBar : React.FunctionComponent = () => {

    return (
        <Menu inverted color='blue' fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' exact name="Activities" />
                <Menu.Item as={NavLink} to='/create-activities' name='Create Activities' />
            </Container>
        </Menu>
    )


}

export default NavBar;