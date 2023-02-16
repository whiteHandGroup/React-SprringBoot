import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import home_Logo from '../images/home_Logo2.png';
import book_Logo from '../images/icon_book.png';
import InsertBook from "./insertBook";

function Navigation(){
    const [InsertBookOn, setInsertBookOn] = useState(false);
    return (
    <Navbar bg="light" expand="lg">
          <InsertBook show={InsertBookOn} onHide={() => setInsertBookOn(false)}/>
          <Container fluid>
            <Navbar.Brand href="/">
                <img
                    className="book_logo"
                    src={book_Logo}
                    style={{ width: '75px' }}
                    alt=""
                />
                <img
                    className="home_logo"
                    src={home_Logo}
                    style={{ width: '300px' }}
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/menu1">도서</Nav.Link>
                <Nav.Link href="/menu2">반지환</Nav.Link>
                <Nav.Link href="/menu3">박나혜</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>Link</Nav.Link>
                <Nav.Link onClick={()=>setInsertBookOn(true)}>도서 추가</Nav.Link>
              </Nav>
              <Form className="d-flex" style={{marginLeft: '63%'}}>
                <Button href ="/login">login</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation;