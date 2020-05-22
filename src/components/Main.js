import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from "react-router-dom";
import SignUpForm from './login/Loginform';

class MainSide extends React.Component {
    render () {
        return  (
        <Switch>
        <Route   exact path="/signup" render={(props) => <SignUpForm {...props}/> } />
        </Switch> 
        )
    }
}

export default MainSide;