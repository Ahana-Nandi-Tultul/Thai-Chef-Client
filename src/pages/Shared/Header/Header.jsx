import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout()
    .then(() =>{})
    .catch(error => {
      console.log(error)
    })
  }
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
           <Link to="/"><img src={logo} alt="" style={{height: "60px"}}/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className='text-secondary fs-5 text-decoration-none me-2'>Home</Link>
            <Link className='text-secondary fs-5 text-decoration-none me-2'>Blog</Link>
            <Link className='text-secondary fs-5 text-decoration-none me-2'>About Us</Link>
          </Nav>
          <Nav className='d-flex align-items-center'>
            
            {
              user  ?<>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Button variant='secondary' onClick={handleLogout}>signout</Button>
              </> :
              <Link to="/login"><Button variant='secondary'>Login</Button></Link> 

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </div>
    );
};

export default Header;