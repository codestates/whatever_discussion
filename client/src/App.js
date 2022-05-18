import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer'

// Pages
import Main from './Pages/Main'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup';
import Post from './Pages/Post';

function App() {
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
