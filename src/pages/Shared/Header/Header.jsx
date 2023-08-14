import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import './Header.css';

const Header = () => {
  const {user, logout} = useContext(AuthContext);
  // console.log(user?.photoURL);
  const photo = user?.photoURL;
  const name = user?.displayName;
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
            <NavLink to='/'   className={({ isActive }) => isActive ? "active" : "text-secondary fs-5 text-decoration-none me-2" }>Home</NavLink>
            <NavLink to='/blog'   className={({ isActive }) => isActive ? "active" : "text-secondary fs-5 text-decoration-none me-2" }>Blog</NavLink>            
          </Nav>
          <Nav className='d-flex align-items-center'>
            
            {
              user  ?<>
              {
                photo ? <Image src={photo} roundedCircle style={{height: "50px",width: "50px"}}
                 className='me-2 bg-dark text-white' 
                 data-tooltip-id="my-tooltip" data-tooltip-content={name}  /> :
                <FaUserCircle style={{height: "50px",width: "50px"}} className='me-2' data-tooltip-id="my-tooltip"/>
              }
              <Tooltip id="my-tooltip" className='bg-dark text-white' />
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