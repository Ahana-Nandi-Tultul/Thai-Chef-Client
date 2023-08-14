import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Register.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser, updateProfileInfo} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        setError('');
        setSuccess('');

        createUser(email, password)
        .then(result => {
            const data = {
                displayName: name,
                photoURL: photo
            }
            updateProfileInfo(data)
            .then(() => {})
            .catch(error => {
                console.log(error);
                let m = error.message.split(':');
                m = m[1].split('(');
                setError(m[0]);
            })
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Success!! You have created account successfully.')
            form.reset();
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
            <h2 className='display-5 fw-bold text-center mb-5'>Please Register!!!</h2>
            <Form className='register' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Photo URL" required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
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
                    Already Have an Account? Please <Link to="/login" className='text-primary
                     text-decoration-none mt-5'>Login</Link>
                </Form.Text>
                <p><small className='text-danger'>{error}</small></p>
                <p><small className='text-success'>{success}</small></p>
            </Form>
        </Container>
    );
};

export default Register;