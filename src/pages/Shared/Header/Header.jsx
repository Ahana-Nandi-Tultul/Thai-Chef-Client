import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" >
            <img src={logo} alt="" style={{height: "60px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#deets">Profile</Nav.Link>
             <Link to="/register"><Button variant='secondary'>Login</Button></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
};

export default Header;