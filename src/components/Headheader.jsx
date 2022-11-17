import React from 'react';
import myimage from "./image2.jpg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Find_Scope from './Find_Scope';
import Home from './Home';

function Headheader( loggedIn,logout) {
  const myStyle = {
   
  
   
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg='secondary' variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home"> <h1>Bornholm Regional Municipality IT-DEPARMENT</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  href="#action1">Home</Nav.Link>
            
            
            <NavDropdown title="Meneu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/find_scope">Scopes</NavDropdown.Item>
              <NavDropdown.Item href="/find_reservation"> Reservations</NavDropdown.Item>
              <NavDropdown.Item href="/find_leases">Leases</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">
               About
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/signin">
              SignIn
            </Nav.Link>
          </Nav>
        

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Headheader