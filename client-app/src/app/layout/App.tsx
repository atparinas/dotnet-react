import { Route, useLocation, Switch } from 'react-router';
import { Container} from 'semantic-ui-react';
import ActivityDashboard from '../../features/Activities/Dashboard/ActivityDashboard';
import ActivtyDetails from '../../features/Activities/details/ActivityDetails';
import ActivityForm from '../../features/Activities/forms/ActivityForm';
import HomePage from '../../features/home/HomePage';
import NavBar from './NavBar';
import TestError from "../../features/errors/TestError";
import {ToastContainer} from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

function App() {

    const location = useLocation();

    return (
        <>
            <ToastContainer position='bottom-right' hideProgressBar />
            <Route exact path="/" component={HomePage} />
            <Route path={'/(.+)'} 
                render={() => (
                    <>
                        <NavBar />
                        <Container style={{marginTop: '5em'}}>
                            <Switch>
                                <Route exact path="/activities" component={ActivityDashboard} />
                                <Route path="/activities/:id" component={ActivtyDetails} />
                                <Route key={location.key}
                                       path={["/create-activities", "/edit-activities/:id"]}
                                       component={ActivityForm} />
                                <Route path='/errors' component={TestError} />
                                <Route path='/server-error' component={ServerError} />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </>
                )}
            
            />
            
        </>
    );
}

export default App;
