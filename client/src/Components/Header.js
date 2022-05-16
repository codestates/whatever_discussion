import './Header.css';
import logo from '../Images/Logo.png'
import accountIcon from '../Icons/account.svg'

function Header() {
  return (
    <div>
      <div className='header'>
        <img src={logo} alt='logo'></img>
        <p>ABOUT</p>
        <p>WRITE</p>
        <img src={accountIcon} alt='accountIcon'></img>
      </div>
    </div>
  );
}

export default Header;