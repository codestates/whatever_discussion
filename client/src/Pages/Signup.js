import './Signup.css';
import{ useState } from 'react';
import axios from 'axios';
  
axios.defaults.withCredentials = true;

function Signup() {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    nickname: '',
    password: '',
    mbti: ''
  });
  
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const handleSignup = () => {

    if( userInfo.userId && userInfo.nickname && userInfo.password && userInfo.mbti ){
      axios.post('https://api.whatever_discussion.co.kr/auth/signup',{ data:userInfo, message: 'signup' },
      { headers: {Accept: "application/json","Content-Type": "application/json"}, withCredentials: true })}

      else if(!userInfo.userId || !userInfo.nickname || !userInfo.password || !userInfo.mbti ){
        return alert('Insufficient data were provided to server.')
    }
  };
  
  const handleFindId = () => {
    const findId = axios.get('https://api.whatever_discussion.co.kr/auth/idCheck',{userId:userInfo.userId,message:''})
    
    return findId.message
    // if(findId) {
    //   return alert('This id already exists in this service. Please suggest another id.')
    // } else {
    //   return alert('You can make a user account using this id.') 
    // }
  }

  const handleFindNickname = () => {
    const findNickname = axios.get('https://api.whatever_discussion.co.kr/auth/nicknameCheck',{nickname:userInfo.nickname,message:''})
    
    return findNickname.message
    // if(findNickname) {
    //   return alert('This id already exists in this service. Please suggest another id.')
    // } else {
    //   return alert('You can make a user account using this id.') 
    // }
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='signUp'>
          <h2>회원가입</h2>
          <div>
            <input type='text' placeholder='아이디' onChange={handleInputValue('userId')} required></input>
            <button type='button' onClick={handleFindId}>중복확인</button>
          </div>
          <div>
            <input type='text' placeholder='별명' onChange={handleInputValue('nickname')} required></input>
            <button type='button' onClick={handleFindNickname}>중복확인</button>
          </div>

          <input type='password' placeholder='비밀번호' minlength='6' onChange={handleInputValue('password')} required></input>
          <input type='text' placeholder='MBTI' onChange={handleInputValue('mbti')} required></input>
          
          <input type='submit' value='회원가입' onClick={handleSignup}></input>
        </div>
      </form>
    </div>
  );
}

export default Signup;