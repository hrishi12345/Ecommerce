import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Navbar1() {
  return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto mx-3 px-3">
  <Nav.Link href="#home" className="me-5">Home</Nav.Link>
  <Nav.Link href="#store" className="me-5">Store</Nav.Link>
  <Nav.Link href="about">About</Nav.Link>
</Nav>
          <Button variant="outline-success" className="me-2">Cart</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    }