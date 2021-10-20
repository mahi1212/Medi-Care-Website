import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className='fs-2'>MediCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {user.displayName && <Navbar.Text className='text-warning ms-2'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>}
                        <Nav className="ms-auto fs-4">
                            <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/home">Home</NavLink>
                            <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/services">Services</NavLink>
                            <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/reviews">Reviews</NavLink>
                            <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/about">About Us</NavLink>
                            {user.email ?
                                <NavLink onClick={logOut} className='px-2 text-decoration-none ' activeClassName='text-warning' to="/login">Logout</NavLink>
                                :<NavLink className='px-2 text-decoration-none text-primary' activeClassName='text-warning' to="/login">Login</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;