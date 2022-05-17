import './App.css';

// Components
import Header from './Components/Header';
import Footer from './Components/Footer'

// Pages
import Main from './Pages/Main'
import Signin from './Pages/Signin';

function App() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
      <Signin />
      <Footer />
    </div>
  );
}

export default App;
