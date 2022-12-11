import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import kakao_login from '../images/kakao_login_large_narrow.png';

function login(){
    return(
        <div className="login">
             <Navbar.Brand href="/">
                            <img
                                className="kakao_login"
                                src={kakao_login}
                            />
            </Navbar.Brand>
        </div>
    );
}

export default login;