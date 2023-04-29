import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';

const Register = () => {
    // Step 01 ---------- for firebase integration ----------------
    const { createUser } = useContext(authContext);

    // step 02 ---------------------handle event--------------------
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(form, name, email, password)

        // 2 -----
        createUser(email, password)
        .then(result => {
            const createdUser =  result.user;
            console.log(createdUser)
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <Container className='mx-auto w-25'>
            <h2>Please Register</h2>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className='text-secondary'>Already have an account?<Link to="/login">Login</Link></Form.Text>
                <Form.Text className='text-danger'></Form.Text>
                <Form.Text className='text-success'></Form.Text>
            </Form>
        </Container>
    );
};

export default Register;