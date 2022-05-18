import './ContentsBox.css';
import accountIcon from '../Icons/account.svg'
import voteIcon from '../Icons/vote.svg'
import repleIcon from '../Icons/repleIcon.svg'
import dummy from './content.json'

function ContentsBox() {
  return (
    <div>
      {dummy.content.map((content) => 
      <div className='board' key={content.id}>
        <div className='imgBox'>
          <img src={content.image}></img>
        </div>
        <div className='topic'>Topic</div>
        <h3 className='title'>{content.subject}</h3>
        <div className='iconBox'>
            <div className='voteIconBox'>
              <img className='voteIcon' src={voteIcon}></img>
              <div className='data'>{content.likes}</div> 
              <img className='repleIcon' src={repleIcon}></img>
              <div className='data'>{content.comments}</div> 
            </div>
            <div className='accountIconBox' >
              <img className='accountIcon' src={accountIcon}></img>
              <div className='userId'>{content.userId}</div>
            </div>
        </div>
      </div>
      )}
      

    </div>
  );
}

export default ContentsBox;