import './Main.css';
import ContentsBox from '../Components/ContentsBox.js'
import Logo from '../Images/LogoBlack.png'

function Main({dummy}) {
  return (
    <div>
      <div className='banner'>
        <img src={Logo} alt='logo'></img>
        <h1>whatever_discussion</h1>
        <p>서로를 이해해보는 커뮤니티, 각기 다른 16가지 mbti가 모여 한곳에서 이야기를 나누는 공간</p>
        <p>이곳은 <b>whatever discussion</b> 입니다.</p>
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
       {dummy.content.map((content, index)=><ContentsBox content={content} key={index}/>)}
       </div>
    </div>
  );
}

export default Main;