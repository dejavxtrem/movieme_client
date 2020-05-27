import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Home from './components/Home'
import NavHeader from './components/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import SignUpForm from './components/signup/Signform';
import LoginForm from './components/loginform/Loginform';
import ShowComponent from './components/showpage/Show'



let baseURL = process.env.REACT_APP_BASEURL







class App extends React.Component {





  render () {
    return (
      <Container fluid bsPrefix="containeridea">
 
        {/* Navheader component */}
        <NavHeader/>
  

      <Row bsPrefix="switchclass">
        <Col>
        <Switch>
        <Route   exact path= "/" render={(props) => <Home {...props}/> } />
        <Route   exact path= "/login" render={(props) => <LoginForm {...props}/> } />
        <Route   exact path= "/signup" render={(props) => <SignUpForm {...props}/> } />
        <Route   exact path= "/show" render={(props) => <ShowComponent {...props}/> } />
        <Redirect to="/" />
      </Switch>
        </Col>
   
      </Row>




    </Container>
 
 
    )
  }
}

export default App;
