import './Signin.css';
import logo from '../Images/LogoBlack.png'
import React, { useState } from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;
  
function Signin({ handleResponseSuccess, handleResponseFail,isSignin}) {

  const [signinInfo, setSigninInfo] = useState({
    userId: '',
    password: ''
  });

  const handleInputValue = (key) => (e) => {
    setSigninInfo({ ...signinInfo, [key]: e.target.value });
  };

  const handleSignin = () => {

    if(signinInfo.userId && signinInfo.password) {
      axios.post('https://localhost:4000/auth/signin',signinInfo)
      .then((res)=>
      res.data.message==="You are successfully logged in." ? handleResponseSuccess(): handleResponseFail() 
      )
    }
    if(!signinInfo.userId || !signinInfo.password) {
      return alert('Insufficient data were provided to server.')
    } 
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='signIn'>
            <img src={logo} alt='logo'></img>
            <h2>로그인</h2>
            <input type='text' placeholder='아이디' onChange={handleInputValue('userId')} required></input>
            <input type='password' placeholder='비밀번호' onChange={handleInputValue('password')} required></input>
            <div>
              <p>처음 방문하셨나요?</p>
              <input type="submit" value="로그인" onClick={handleSignin}></input>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;