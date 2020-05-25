import React from 'react';
import './loginform.css';
import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
import { withContext } from "../../components/AppContext";
import {
    Button,
    FormGroup,
    FormControl,
    Feedback,
    ControlLabel
  } from 'react-bootstrap';


class LoginForm extends React.Component {
    state = {
     email: '',
     password: '',
     errorMessage: ""
    }



clearInputs = () => {
    this.setState({
        email: "",
        password: "",
        errorMessage: ""
    })
}

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    
    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.props.loginInfo(this.state)
        .then(() => this.clearInputs())
        .then(() => this.props.history.push("/show")) 
        .catch(err => {
            this.setState({errorMessage: err.data})
        })
           
    }
 
     render () {
         return (
             <>
            
             <Form className="loginformclass" onSubmit={this.handleLoginSubmit}>
            <FormGroup>
             <Form.Label>Email address</Form.Label>
             <FormControl type="email" placeholder="Enter email"  name="email"   value={this.state.email}   onChange={this.handleChange}/>
             </FormGroup>
 
             <Form.Group>
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange} />
             </Form.Group>
             <Button variant="primary" type="submit">
                 Submit
             </Button>
             </Form>
             {
                this.state.errorMessage &&
                <p style={{color: "red"}}>{this.state.errorMessage}</p>
            }
             </>
         )
     }
 }
 
 export default withContext(LoginForm);
