import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import kakaoBtn from '../images/kakao_login_large_narrow.png';


const LoginPage = () =>{

    return (
        <div className='loginPage text-center m-5'>
            <h1>WebSocket Chrome Extension Test Front Page</h1>
            <a href={'http://localhost:8080/oauth2/authorization/kakao'}><img className='login_btn_kakao' src={kakaoBtn} /></a>
        </div>
    )
}

export default LoginPage