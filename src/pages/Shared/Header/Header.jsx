import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const Header = () => {
  const {user, logout} = useContext(AuthContext);
  console.log(user?.photoURL);
  const photo = user?.photoURL;
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
              {
                photo ? <Image src={photo} roundedCircle style={{height: "50px",width: "50px"}} className='me-2' /> :
                <FaUserCircle style={{height: "50px",width: "50px"}} className='me-2'/>
              }
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