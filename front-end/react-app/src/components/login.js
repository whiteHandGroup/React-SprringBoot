import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import kakaoBtn from '../images/kakao_login_large_narrow.png';
import queryString from 'query-string';
import axios from 'axios';


const REST_API_KEY = "42456e26e76265f54ac4dc4667fe92d7";
const REDIRECT_URI =  "http://localhost:3000/auth";


function LoginPage(){

    const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleLogin = () => {
        window.location.href = kauthUrl;
    }

        return (
            <div className='loginPage text-center m-5'>
                <a onClick={handleLogin}><img className='login_btn_kakao' src={kakaoBtn}/></a>
            </div>
        )



}

export default LoginPage