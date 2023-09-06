import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {

    const {createUser, signInwithGoogle, verifyEmail} =useContext(AuthContext)
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const handleGoogleSignIn = () =>{
        signInwithGoogle(provider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

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
            form.reset();
            setError('')
            handleEmailVerification();
            toast.success('please verify your email address!')
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    const handleEmailVerification = () =>{
        verifyEmail()
        .then(()=>{})
        .catch(e => console.error(e))
    }

    const handleAccept = event =>{
        setAccepted(event.target.checked)
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
                    <small className='me-2'>Agree with <Link to='/term'>term and condition</Link></small>
                    <Form.Check className='bg-primary rounded' onClick={handleAccept} type="checkbox" /> 
                </Form.Group>
                <p className='text-danger'>
                    {error}
                </p>
                <p>Already have an account <Link to='/login'>Please Login</Link></p>
                <Button disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <button onClick={handleGoogleSignIn} className='w-full mt-3'> <FaGoogle></FaGoogle> Login with Google</button>
        </div>
    );
};

export default Register;