import './Main.css';
import ContentsBox from '../Components/ContentsBox.js'

function Main() {
  return (
    <div>

      <div id='banner'>
      </div>

      <div id='searchLine'>
        <button id='popular'>인기순</button>
        <button id='latest'>최신순</button>
        <input id='searchBox' type='text' placeholder='검색어입력'></input>
        <button id='search'>검색</button>
      </div>

      <div id='contentsSector'>
        <ContentsBox/>
      </div>

    </div>
  );
}

export default Main;