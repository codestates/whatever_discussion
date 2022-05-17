import './Post.css';
import postPic from '../Images/post.jpg'
import recommend from '../Icons/recommend.svg'

function Post() {
  return (
    <div>
      <div className='postpage'>
        
        <div className='post'>
          <img src={postPic} alt='Post Image'></img>
          <div className='subject'>
            <div>topic</div>
            <p>제목이 들어갈 자리</p>
          </div>
          <div className='content'>
            <div>
              <p>해당 내용이 들어갈 자리입니다.</p>
            </div>
          </div>
          
          <div className='vote'>
            <div>
              <div className='agree'>
                <p>찬성 56%</p>
              </div>
              <div className='disagree'>
                <p>반대 44%</p>
              </div>
            </div>
          </div>
        </div>

        <div className='modify'>
          <button>수정</button>
          <button>삭제</button>
        </div>

        {/* <div className='line'></div> */}

        <div className='comments'>
          <div className='commentOptions'>
            <div className='commentLeft'>
              <div></div>
              <p>댓글</p>
              <p>00</p>
            </div>
            <div className='commentRight'>
              <select>
                <option value='1'>모든 댓글보기</option>
                <option value='2'>찬성 댓글보기</option>
                <option value='3'>반대 댓글보기</option>
              </select>
              <p>공감순</p>
              <p>시간순</p>
            </div>
            
          </div>
          <div className='commentWrite'>
            <div>
              <p>아이디</p>
            </div>
            <div>
              <input type='text' placeholder='댓글을 남겨보세요.'></input>
              <button>등록</button>
            </div>
          </div>

          <div className='commentLists'>
            <div>
              <div>
                <p>아이디</p>
                <div>MBTI</div>
                <p>1시간 전</p>
              </div>
              <div>
                <button>x</button>
                <div>찬성</div>
                <p>공감</p>
                <p>00</p>
              </div>
            </div>
            <div>
              <p>누군가 작성한 댓글입니다.</p>
              <img src={recommend} alt='Recommend Icon'></img>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Post;