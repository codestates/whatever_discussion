import './Main.css';
import ContentsBox from '../Components/ContentsBox.js'

function Main() {
  return (
    <div>
      <div className='banner'>
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
        <ContentsBox/>
      </div>

    </div>
  );
}

export default Main;