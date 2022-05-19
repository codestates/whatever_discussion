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
      axios.post('https://api.whatever_discussion.co.kr/auth/signup',userInfo,
      { headers: {Accept: "application/json","Content-Type": "application/json"}, withCredentials: true })}

      else if(!userInfo.userId || !userInfo.nickname || !userInfo.password || !userInfo.mbti ){
        return alert('Insufficient data were provided to server.')
    }
  };
  
  const handleFindId = async() => {
    if(!userInfo.userId){
      return alert('please input Id')
    }
    const findId = await axios.get(`http://localhost:4000/auth/idCheck/${userInfo.userId}`)
    
    if(findId.data.message==="This id already exists.") {
      return alert('This id already exists in this service. Please suggest another id.')
    } 
    if(findId.data.message==="You can use this id."){
      return alert('You can make a user account using this id.')}
    
  }

  const handleFindNickname = () => {
    const findNickname = axios.get(`http://localhost:4000/auth/nicknameCheck/${userInfo.nickname}`)
    
    if(!userInfo.nickname){
      return alert('please input Nickname')
    }
    if(findNickname.data.message==="This nickname already exists.") {
      return alert('This nickname already exists in this service. Please suggest another id.')
    } 
    if(findNickname.data.message==="You can use this nickname."){
      return alert('You can make a user account using this nickname.')}
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