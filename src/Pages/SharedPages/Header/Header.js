import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(e => console.log(e))
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary me-5 ms-5 mb-3">
                <Container fluid>
                    <Navbar.Brand href="#"><Link to='/'>Course 360</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Link className='me-2' to='/'>Home</Link>
                            <Link>Courses</Link>
                            <p>{user?.displayName}</p>
                        </Nav>
                        <div className="d-flex">
                            {
                                user?.uid ?
                                <>
                                    <small className='text-dark'>{user?.email}</small>
                                    <button onClick={handleLogOut}>Logout</button>
                                </>    
                                :    
                                <>
                                    <Link className='me-3' to='/login'>Log in</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }
                            
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;