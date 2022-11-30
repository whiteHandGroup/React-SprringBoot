import React from 'react';
//import {BrowserRouter} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation(){
    return (
       <div className="Navigation">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">logo place</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/menu1">menu1</Nav.Link>
                  <Nav.Link href="menu2">menu2</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-info">Search</Button>
                </Form>
             </Navbar>
       </div>
    );
}

export default Navigation;