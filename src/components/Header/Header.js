import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" collapseOnSelect expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className='fs-2'>MediCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fs-4">
                        <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/home">Home</NavLink>
                        <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/services">Services</NavLink>
                        <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/reviews">Reviews</NavLink>
                        <NavLink className='px-2 text-decoration-none text-white' activeClassName='border-bottom' to="/about">About Us</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;