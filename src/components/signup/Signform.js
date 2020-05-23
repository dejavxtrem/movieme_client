import React from 'react';
import './loginform.css';
import { withContext } from "../../components/AppContext"
import Form from 'react-bootstrap/Form'
import {
    Button,
    FormGroup,
    FormControl,
    Feedback,
    ControlLabel
  } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button'




class SignUpForm extends React.Component {
   state = {
    name: '',
    email: '',
    password: ''
   }

clearInputs = () => {
    this.setState({
        name: "",
        email: "",
        password: "",

    })
}


handleChange = (e) => {
    const { name, value } = e.target
        this.setState({
            [name]: value
        })
}
 

handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
     this.props.signUpInfo(this.state)
     .then(() => this.props.history.push("/home"))
    }





    render () {
        return (

            <Form className="formclass" onSubmit={this.handleSubmit}>
          <FormGroup >
            <Form.Label>Name</Form.Label>
            <FormControl type="name" placeholder="name" id="name" name="name" value={this.state.name}  onChange={this.handleChange}/>
            </FormGroup>

        <Form.Group >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id="email"  name ="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password "name="password" value={this.state.password}  onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        )
    }
}

export default withContext(SignUpForm)