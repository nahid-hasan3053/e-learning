import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const {createUser} =useContext(AuthContext)
    const navigate = useNavigate();

    const [error, setError] = useState('')

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
            form.reset();
        })
        .catch(error =>{
            setError(error.message)
        })
        
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="name" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Enter your photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                    <small className='me-2'>Agree with term and condition</small>
                    <Form.Check type="checkbox" /> 
                </Form.Group>
                <p className='text-danger'>
                    {error}
                </p>
                <p>Already have an account <Link to='/login'>Please Login</Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;