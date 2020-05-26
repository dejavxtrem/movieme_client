import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { withContext } from "./AppContext";
//import MainSide from  './Main';
import Button from 'react-bootstrap/Button'


class NavHeader extends React.Component {
    render () {
        {console.log(this.props.token)}
        return (
            
            <Navbar expand="lg" variant="dark" bg="dark" fixed="top" className="justify-content-end">
        
            <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        <Nav className="mr-auto"> 
        {!this.props.token ?  
        <React.Fragment>
         <LinkContainer  Link to="/home">
        <Nav.Link  >Home</Nav.Link>
        </LinkContainer>    
        
        <LinkContainer to="/login">
        <Nav.Link >Login</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/signup">
        <Nav.Link >Sign-up</Nav.Link>
        </LinkContainer> 
        </React.Fragment>

        : 

        <React.Fragment>
        <LinkContainer to="/show">
        <Nav.Link >Show</Nav.Link>
        </LinkContainer> 

        <LinkContainer to="/Movielist">
        <Nav.Link >MovieList</Nav.Link>
        </LinkContainer> 
        
        <div>
        <Button variant="dark" onClick={() => this.props.logOut}>Sign Out</Button>{' '}
        </div>
     
        </React.Fragment>
        
        }   
 
       
    
 

        </Nav>
  </Navbar>
        )
        
}
}

export default withContext(NavHeader);