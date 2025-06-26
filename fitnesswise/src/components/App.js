import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavigationDrawer from './NavigationDrawer';
import TimerButtons from './TimerButtons';
import WorkoutDisplay from './WorkoutDisplay';
import Auth from './Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <HamburgerMenu />
                <NavigationDrawer />
                <TimerButtons />
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/workout" component={WorkoutDisplay} />
                    <Route path="/" exact>
                        <h1>Welcome to the Modern Fitness Tracker</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;