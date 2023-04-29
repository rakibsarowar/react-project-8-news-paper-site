import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';

const Login = () => {
    // Step 01 --- for firebase login ---------------------------------------------------
    const {signIn} = useContext(authContext);
    
    // Step 01.1 --- for firebase login ---------------------------------------------------
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }




    return (
        <Container className='mx-auto w-25'>
            <h2>Please login</h2>

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className='text-secondary'>Dont have an account?<Link to="/register">Register</Link></Form.Text>
                <Form.Text className='text-danger'></Form.Text>
                <Form.Text className='text-success'></Form.Text>
            </Form>
        </Container>
    );
};

export default Login;