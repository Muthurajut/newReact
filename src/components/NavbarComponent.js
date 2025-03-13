import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './NavbarComponent.css';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='navadjust'>
            <Container>
                <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2">Another Action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3">Something else</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
