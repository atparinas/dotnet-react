import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../../stores/store';



const NavBar : React.FunctionComponent = () => {

    const {activityStore} = useStore();

    return (
        <Menu inverted color='blue' fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: "10px"}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name="Activities" />
                <Menu.Item>
                    <Button 
                        onClick={() => activityStore.openForm()}
                        positive content="Create Activities" />
                </Menu.Item>
            </Container>
        </Menu>
    )


}

export default NavBar;