import './App.css';

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
