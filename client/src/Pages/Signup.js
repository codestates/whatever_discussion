import './Signup.css';
import logo from '../Images/LogoBlack.png'

function Signup() {
  return (
    <div>
      <div className='signUp'>
        <h2>회원가입</h2>
        <div>
          <input type='text' placeholder='아이디'></input>
          <button type='button'>중복확인</button>
        </div>

        <div>
          <input type='text' placeholder='별명'></input>
          <button type='button'>중복확인</button>
        </div>

        <input type='password' placeholder='비밀번호'></input>
        <input type='text' placeholder='전화번호'></input>
        <input type='email' placeholder='이메일'></input>
        <input type='text' placeholder='MBTI'></input>
        
        <button type='button'>회원가입</button>
      </div>
    </div>
  );
}

export default Signup;