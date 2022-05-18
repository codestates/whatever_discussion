import './Signin.css';
import logo from '../Images/LogoBlack.png'
import React, { useState } from 'react';
import {BrowserRouter as Route } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;
  
function Signin({ handleResponseSuccess }) {

  const [signinInfo, setSigninInfo] = useState({
    userId: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const handleInputValue = (key) => (e) => {
    setSigninInfo({ ...signinInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    if(signinInfo.userId && signinInfo.password){
      axios.post('https://api.whatever_discussion.co.kr/auth/signin',signinInfo,
      { headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
      .then((res)=>
      handleResponseSuccess(res.data.accessToken)
      )
    } else {
      setErrorMessage('')
    }
  }
  return (
    <div>
      <form>
        <div className='signIn'>
            <img src={logo} alt='logo'></img>
            <h2>로그인</h2>
            <input type='text' placeholder='아이디' required></input>
            <input type='text' placeholder='비밀번호' required></input>
            <div>
              <p>처음 방문하셨나요?</p>
              <input type="submit" value="로그인" onClick={() => alert('로그인 완료')}></input>
            </div>
        </div>
      </form>
    </div>
    
  );
}

export default Signin;