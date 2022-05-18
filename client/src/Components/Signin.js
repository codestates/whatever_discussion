
class Signin{
  constructor() {
    
  }
  SigninHandler() {
  }

  render() {
    return (
      <div className='signinContainer'>
        <button onClick={SigninHandler} className='SigninBtn'>
        로그인
        </button>
      </div>
    );
  }
}

export default Signin;
