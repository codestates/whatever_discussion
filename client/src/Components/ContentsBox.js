import './ContentsBox.css';
import accountIcon from '../Icons/account.svg'
import voteIcon from '../Icons/vote.svg'
import repleIcon from '../Icons/repleIcon.svg'

function ContentsBox() {
  return (
    <div>
      <div id='boderContainer'>
       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>

       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>

       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>

       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>

       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>

       <div className='board'>
        <div className='imgBox'></div>
        <div className='Topic'>Topic</div>
        <h3 className='title'>토픽주제가 들어갈 공간입니다.</h3>
        <div id='icon'>
            <div id='voteIconBox'>
              <img id='voteIcon' src={voteIcon}></img>
              <div className='data'>00</div> 
              <img id='repleIcon' src={repleIcon}></img>
              <div className='data'>00</div> 
            </div>
            <div id='accountIconBox' >
              <img id='accountIcon' src={accountIcon}></img>
              <div className='userId'>유저아이디</div>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default ContentsBox;