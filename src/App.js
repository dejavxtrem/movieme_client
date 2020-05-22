import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JumbotronClass from './components/Jumbotron/Jumbotron';
import TitleImg from './components/titlelist/Title'
//import NavHeader from './components/Header';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import MainSide from './components/Main';






class App extends React.Component {

  render () {
    return (
      <Container fluid bsPrefix="containeridea">
      <Row>
        <Col>
        {/* Navheader component */}
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="justify-content-end">
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        <Nav className="mr-auto"> 
        <LinkContainer  Link to="/home">
        <Nav.Link  >Home</Nav.Link>
        </LinkContainer>    
        
        <LinkContainer to="/login">
        <Nav.Link >Login</Nav.Link>
        </LinkContainer>
        
        <LinkContainer to="/signup">
        <Nav.Link >Sign-up</Nav.Link>
        </LinkContainer>
        
        </Nav>       
  </Navbar>
      <MainSide/>

        </Col>
      </Row>
     
      <Row >
        <Col >
        <JumbotronClass/>
        </Col>
      </Row>

      <Row>
      <TitleImg/>
      </Row>

    </Container>
 
 
    )
  }
}

export default App;
