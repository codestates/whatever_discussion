import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Route,Redirect } from "react-router-dom";
import axios from 'axios';


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
  const [userinfo, setUserinfo] = useState(null);

  const isAuthenticated = (token) => {
    const data= axios.get('',{accessToken:token,message:''},{ headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    withCredentials: true
  })
  setUserinfo(data)
  setIsSignin(true)
  };

  const handleResponseSuccess = (token) => {
    isAuthenticated(token);
  };

  const handleSignout = () => {
    axios.post('https://api.whatever_discussion.co.kr/auth/signout').then((res) => {
      setUserinfo(null);
      setIsSignin(false);
    });
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <div>
      <Header />
      <Main /> 
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* {<Post />} */}
      <Footer />
    </div>
  );
}

export default App;
