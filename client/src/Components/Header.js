import './Header.css';
import logo from '../Images/Logo.png'
import accountIcon from '../Icons/account.svg'
import { useState } from 'react';

function Header() {
  const [islogin,setIslogin] = useState(false)
  const [style, setStyle] = useState({display: 'none'})
  const setDisplay = function () {
    if(style.display === 'none') { 
      setStyle({display: 'block'})
    } else {
      setStyle({display: 'none'})
    }
  }

  return (
    <div>
      <div className='header'>
        <a href='/'><img src={logo} alt='logo'></img></a>
        {/* <a><p>WRITE</p></a> */}
        <img src={accountIcon} alt='accountIcon' onClick={setDisplay}></img>
      </div>
      <div className='menu' style={style}>
        <a href='/signup'><div>Signup</div></a>
        {!islogin ? <a href='/signin'><div>Login</div></a>:
        <div onClick={() => alert('로그아웃')}>Logout</div>}
        <a><div>Mypage</div></a>
      </div>
    </div>
  );
}

export default Header;