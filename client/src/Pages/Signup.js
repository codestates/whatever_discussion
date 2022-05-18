import './Signup.css';
import logo from '../Images/LogoBlack.png'
import{ useState } from 'react';
import axios from 'axios';
  
axios.defaults.withCredentials = true;

function Signup() {
  const [userinfo, setuserinfo] = useState({
    userId: '',
    nickName: '',
    password: '',
    mbti: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };
  const handleSignup = () => {
      
    if( userinfo.userId && userinfo.nickName && userinfo.password && userinfo.mbti ){
      axios.post('https://api.whatever_discussion.co.kr/auth/signup',{ data:userinfo, message: '' },
      { headers: {Accept: "application/json","Content-Type": "application/json"}, withCredentials: true })}
      else {
      setErrorMessage()
    }
  };

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