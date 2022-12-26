import React from 'react';
import queryString from 'query-string';


const REST_API_KEY = "42456e26e76265f54ac4dc4667fe92d7";
const REDIRECT_URI =  "http://localhost:3000/auth";

/* URL에 담겨있는 인가코드 추출*/

const PARAMS =new URL(document.location).searchParams;
const KAKAO_CODE = PARAMS.get('code');
const access_token= '';

function getKakaoToken(){

    fetch('https://kauth.kakao.com/oauth/token' , {
        method : 'POST',
        headers : { 'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8'},
        body : `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}&scope=account_email&prompt=login`,
    })
        .then(res => res.json())
        .then(data => {
            if(data.access_token){
                console.log(data);
                localStorage.setItem('token', data.access_token);
                getJWTToken(localStorage.getItem('token'));
            }
        });

/* return (
        <div class ='main'>
            <button onClick={handleLogout(localStorage.getItem('token'))}>logout</button>
        </div>
         )*/

            return(
             <div>
             <img className='profile_image' src= {localStorage.getItem('profile_image')}/>
             <h3>{localStorage.getItem('nickname')} / {localStorage.getItem('email')} 로그인 성공</h3>
             </div>
             )
}

function getJWTToken(access_token){

    console.log(access_token);

    fetch('https://kapi.kakao.com/v2/user/me' , {
        method : 'POST',
        headers: {
                    Authorization: 'Bearer ' + access_token,
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
                  })

    .then(res => res.json())
    .then(data => {
       console.log("회원정보 : ");
       console.log(data);
        /*회원정보 가져오기*/
       localStorage.setItem('nickname', data.kakao_account.profile.nickname);
       localStorage.setItem('email', data.kakao_account.email);
       localStorage.setItem('profile_image', data.kakao_account.profile.profile_image_url);

    });


}

/*연결끊기 (로그아웃 포함)*/

function handleLogout(access_token){
      fetch('https://kapi.kakao.com/v1/user/unlink' , {
            method : 'POST',
            headers: {
                        Authorization: 'Bearer ' + access_token,
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
                      })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });

}

export default getKakaoToken;