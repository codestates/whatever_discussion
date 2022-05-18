import './Main.css';
import ContentsBox from '../Components/ContentsBox.js'
import Logo from '../Images/LogoBlack.png'

function Main({dummy}) {
  return (
    <div>
      <div className='banner'>
        <img src={Logo} alt='logo'></img>
        <h1>whatever_discussion</h1>
        <p>MBTI와 함께하는 일상의 사소한 논쟁</p>
      </div>
      <div className='searchLine'>
        <div>
         <button className='popular'>인기순</button>
         <button className='latest'>최신순</button>
         </div>
        <div>
         <input className='searchBox' type='search' placeholder='검색어입력'></input>
         <button className='search'>검색</button>
        </div>
      </div>
      <div className='contentsSector'>
        {dummy.content.map((content)=><ContentsBox content={content}/>)}
      </div>
    </div>
  );
}

export default Main;