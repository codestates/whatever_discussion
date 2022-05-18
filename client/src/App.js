import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import dummy from './Components/content.json'


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
    if(token){
      isAuthenticated(token)
      return alert('You are successfully logged in.')
    } else {
      return alert('The user is not in the database.')
      }  
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Main dummy={dummy}/> } /> 
        <Route path='/signin' element={ <Signin handleResponseSuccess={handleResponseSuccess} isSignin={isSignin} /> } /> 
        <Route path='/signup' element={ <Signup /> } /> 
        <Route path='/post' element={ <Post /> } /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
