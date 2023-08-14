import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {login} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Success !! You have successfully logged in.')
        })
        .catch(error => {
            console.log(error);
            let m = error.message.split(':');
            m = m[1].split('(');
            setError(m[0]);
        })
    }
    return (
        <Container style={{marginTop: "100px"}}>
            <h2 className='display-5 fw-bold text-center mb-5'>Please Login!!!</h2>
            <Form className='register' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='w-100' variant="success" type="submit">
                    Register
                </Button>
                <Form.Text className="text-muted">
                    New to ThaiChefs? Please <Link to="/register" className='text-primary
                     text-decoration-none mt-5'>Login</Link>
                </Form.Text>
                <p><small className='text-danger'>{error}</small></p>
                <p><small className='text-success'>{success}</small></p>
            </Form>
        </Container>
    );
};

export default Login;