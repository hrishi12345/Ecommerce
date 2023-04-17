import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth_context';

export default function Navbar1() {

  const isLog=useContext(AuthContext)
  const LogoutHandler=()=>{
    isLog.logout()
  }
  return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto mx-3 px-3">
  <Nav.Link href="/" className="me-5">Home</Nav.Link>
  <Nav.Link href="/store" className="me-5">Store</Nav.Link>
  <Nav.Link href="/about">About</Nav.Link>
  <Nav.Link href="/contact">Contact Us</Nav.Link>
  <Nav.Link href="/login">Login</Nav.Link>
</Nav>
          {isLog.isLogin && <button onClick={LogoutHandler}>Logout</button>}
          <Cart variant="outline-success" className="me-2" ></Cart>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    }