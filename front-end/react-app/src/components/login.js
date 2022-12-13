import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from "react-router-dom";
import kakaoBtn from '../images/kakao_login_large_narrow.png';
import queryString from 'query-string';
import axios from 'axios';


const LoginPage = () =>{

const REST_API_KEY = "42456e26e76265f54ac4dc4667fe92d7";
const REDIRECT_URI =  "http://localhost:3000/auth";

const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const query = queryString.parse(window.location.search);

       React.useEffect(() => {
         if (query.code) {
           getKakaoTokenHandler(query.code.toString());
         }
       }, []);
       const getKakaoTokenHandler = async (code:string) => {
         const data:any = {
           grant_type: "authorization_code",
           client_id: "process.env.42456e26e76265f54ac4dc4667fe92d7",
           redirect_uri: "http://localhost:3000/auth",
           code: code
         };
         const queryString = Object.keys(data)
           .map((k:any)=> encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
           .join('&');

         //토큰 발급 REST API
         axios.post('https://kauth.kakao.com/oauth/token', queryString, {
           headers: {
             'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
           }
         }).then((res) => {
           sendKakaoTokenToServer(res.data.access_token)
         });
       }

        /* JWT 토큰 받기 */
         const sendKakaoTokenToServer = (token:string ) => {
           axios.post('/auth/kakao',{access_token: token})
             .then(res => {
               if (res.status == 201 || res.status == 200) {
                 const user =res.data.user;
                 window.localStorage.setItem("token", JSON.stringify({
                   access_token: res.data.jwt
                 }));
                 }
               else {
                 window.alert("로그인에 실패하였습니다.");
               }
             })
         }

    return (
        <div className='loginPage text-center m-5'>
            <h1>WebSocket Chrome Extension Test Front Page</h1>
            <a href={kauthUrl}><img className='login_btn_kakao' src={kakaoBtn} /></a>
        </div>
    )
}

export default LoginPage