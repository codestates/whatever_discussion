import './Header.css';
import logo from '../Images/Logo.png'
import accountIcon from '../Icons/account.svg'
import { useState } from 'react';

function Header() {
  const [style, setStyle] = useState({display: 'none'})
  const setDisplay = function () {
<<<<<<< HEAD
    if(style.display === 'none') {
=======
    if(style.display === 'none') { 
>>>>>>> 92bc6f1d0153334e86b10b245c35f11aad235a73
      setStyle({display: 'block'})
    } else {
      setStyle({display: 'none'})
    }
  }

  return (
    <div>
      <div className='header'>
        <a href='/'><img src={logo} alt='logo'></img></a>
        <a><p>ABOUT</p></a>
        <a><p>WRITE</p></a>
        <img src={accountIcon} alt='accountIcon' onClick={setDisplay}></img>
      </div>
      <div className='menu' style={style}>
        <a href='/signup'><div>회원가입</div></a>
        <a href='/signin'><div>Login</div></a>
        <a><div>Mypage</div></a>
      </div>
    </div>
  );
}

export default Header;