import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import home_Logo from '../images/home_Logo.png';

function Navigation(){

    return (
    <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
                <img
                    className="home_logo"
                    src={home_Logo}
                    style={{ width: '300px' }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/menu1">안상재</Nav.Link>
                <Nav.Link href="/menu2">반지환</Nav.Link>
                <Nav.Link href="/menu3">박나혜</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>Link</Nav.Link>
              </Nav>
              <Form className="d-flex" style={{marginLeft: '63%'}}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation;