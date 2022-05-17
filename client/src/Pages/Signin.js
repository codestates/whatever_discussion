import './Signin.css';
import logo from '../Images/LogoBlack.png'

function Signin() {
  return (
    <div>
      <div className='signIn'>
        <img src={logo} alt='logo'></img>
        <h2>로그인</h2>
        <input type='text' placeholder='아이디'></input>
        <input type='text' placeholder='비밀번호'></input>
        <div>
          <p>처음 방문하셨나요?</p>
          <button type='button'>로그인</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;