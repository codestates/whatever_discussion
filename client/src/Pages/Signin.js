import './Signin.css';
import logo from '../Images/LogoBlack.png'

function Signin() {
  return (
    <div>
      <form>
        <div className='signIn'>
          
            <img src={logo} alt='logo'></img>
            <h2>로그인</h2>
            <input type='text' placeholder='아이디' required></input>
            <input type='text' placeholder='비밀번호' required></input>
            <div>
              <p>처음 방문하셨나요?</p>
              <input type="submit" value="로그인" onClick={() => alert('로그인 완료')}></input>
            </div>
        </div>
      </form>
    </div>
    
  );
}

export default Signin;