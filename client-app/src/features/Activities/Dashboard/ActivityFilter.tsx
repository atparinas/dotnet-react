import React from "react";
import Calendar from "react-calendar";
import {Header, Menu} from "semantic-ui-react";

const ActivityFilter : React.FC = () => {


    return (
        <>
            <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item content='All Activities' />
                <Menu.Item content="I'm Going" />
                <Menu.Item content="I'm Hosting" />
            </Menu>
            <Header />
            <Calendar />
        </>
    )
}

export default ActivityFilter;