import './Main.css';
import ContentsBox from '../Components/ContentsBox.js'

function Main() {
  return (
    <div>

      <div id='banner'>
      </div>

      <div id='searchLine'>
        <div>
         <button id='popular'>인기순</button>
         <button id='latest'>최신순</button>
         </div>
        <div>
         <input id='searchBox' type='search' placeholder='검색어입력'></input>
         <button id='search'>검색</button>
        </div>
      </div>
      <div id='contentsSector'>
        <ContentsBox/>
      </div>

    </div>
  );
}

export default Main;