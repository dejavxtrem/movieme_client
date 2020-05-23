import React from 'react';
import './loginform.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class LoginForm extends React.Component {
    state = {
     email: '',
     password: ''
    }


    // handleChange = (e) => {
        
    // }

    
    // handleSubmit = () => {
    //     e.preventDefault();
    // }
 
     render () {
         return (
             <Form className="loginformclass">
         <Form.Group controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email"  name="email"   value={this.state.email}   onChange={this.handleChange}/>
             <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
                 </Form.Text>
             </Form.Group>
 
             <Form.Group controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange} />
             </Form.Group>
             <Form.Group controlId="formBasicCheckbox">
                 <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>
             <Button variant="primary" type="submit">
                 Submit
             </Button>
             </Form>
         )
     }
 }
 
 export default LoginForm;
