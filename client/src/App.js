import './App.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate()
  const [isSignin, setIsSignin] = useState(false);

  // const isAuthenticated = (token) => {
  //   setIsSignin(true)
  //   if(isSignin){
  //     navigate
  //     return alert('Login Success')
  //   } else {
  //     return alert('User is not found')
  //   }
  // };

  const handleResponseSuccess = () => {
    setIsSignin(true)
    navigate('/')
    return alert('Login success')
  };

  const handleResponseFail =() => {
    setIsSignin(false)
    return alert('Login failed')
  }

  const handleLogout=() => {
    setIsSignin(false)
    navigate('/signin')
  }

  

    return (
      <div>
        <Header isSignin={isSignin} handleLogout={handleLogout}/>
        <Routes>
          <Route exact path='/' element={ <Main dummy={dummy}/> } /> 
          <Route path='/signin' element={ <Signin handleResponseSuccess={handleResponseSuccess} handleResponseFail={handleResponseFail} isSignin={isSignin} /> } /> 
          <Route path='/signup' element={ <Signup /> } /> 
          <Route path='/post' element={ <Post /> } /> 
        </Routes>
        <Footer />
      </div>
    );
}

export default App;
