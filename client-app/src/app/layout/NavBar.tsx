import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


interface Props {
    openForm: () => void
}

const NavBar : React.FunctionComponent<Props> = ({openForm}) => {

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
                        onClick={openForm}
                        positive content="Create Activities" />
                </Menu.Item>
            </Container>
        </Menu>
    )


}

export default NavBar;