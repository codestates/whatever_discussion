import './App.css';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Route,Redirect } from "react-router-dom";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer'

// Pages
import Main from './Pages/Main'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup';
import Post from './Pages/Post';

function App() {

  const [isSignin, setIsSignin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const isAuthenticated = (token) => {
    const data= axios.get('',{accessToken:token,message:''},
    { headers: {Accept: "application/json","Content-Type": "application/json"},
    withCredentials: true
  })
  setUserInfo(data)
  setIsSignin(true)
  };

  const handleResponseSuccess = (token) => {
    isAuthenticated(token);
  };

  const handleSignout = () => {
    axios.post('https://api.whatever_discussion.co.kr/auth/signout').then((res) => {
      setUserInfo(null);
      setIsSignin(false);
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Main /> } /> 
        <Route path='/signin' element={ <Signin /> } /> 
        <Route path='/signup' element={ <Signup /> } /> 
        <Route path='/post' element={ <Post /> } /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
