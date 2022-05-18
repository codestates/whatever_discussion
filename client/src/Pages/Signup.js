import './Signup.css';
import logo from '../Images/LogoBlack.png'

function Signup() {
  return (
    <div>
      <form>
        <div className='signUp'>
          <h2>회원가입</h2>
          <div>
            <input type='text' placeholder='아이디' required></input>
            <button type='button' onClick={() => alert('사용할 수 있는 아이디입니다.')}>중복확인</button>
          </div>

          <div>
            <input type='text' placeholder='별명' required></input>
            <button type='button' onClick={() => alert('사용할 수 있는 별명입니다.')}>중복확인</button>
          </div>

          <input type='password' placeholder='비밀번호' required></input>
          <input type='text' placeholder='MBTI' required></input>
          
          <input type='submit' value='회원가입' onClick={() => alert('회원가입 완료')}></input>
        </div>
      </form>
    </div>
  );
}

export default Signup;