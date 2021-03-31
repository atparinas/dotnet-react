import { Route, useLocation } from 'react-router';
import { Container} from 'semantic-ui-react';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import ActivtyDetails from '../../features/Activities/details/ActivityDetails';
import ActivityForm from '../../features/Activities/forms/ActivityForm';
import HomePage from '../../features/home/HomePage';
import NavBar from './NavBar';

function App() {

    const location = useLocation();

    return (
        <>
            <Route exact path="/" component={HomePage} />
            <Route path={'/(.+)'} 
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{marginTop: '5em'}}>
                            
                            <Route exact path="/activities" component={ActivityDashboard} />
                            <Route path="/activities/:id" component={ActivtyDetails} />
                            <Route key={location.key}
                                path={["/create-activities", "/edit-activities/:id"]} 
                                component={ActivityForm} />

                        </Container>
                    </>
                )}
            
            />
            
        </>
    );
}

export default App;
