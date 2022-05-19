import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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

  const isAuthenticated = (token) => {
    setIsSignin(true)
  };

  const handleResponseSuccess = (token) => {
      isAuthenticated(token)
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
