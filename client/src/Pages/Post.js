import './Post.css';
import postPic from '../Images/post.jpg'
import Comment from '../Components/Comment';
import dummy from '../Components/comments.json'
import content from '../Components/content.json'


function Post() {
  
  return (
    <div>
      <div className='postpage'>
        
        <div className='post'>
          <img src={content.content[0].image} alt='Post Image'></img>
          <div className='subject'>
            <div>topic</div>
            <p>{content.content[0].subject}</p>
          </div>
          <div className='content'>
            <div>
              <p>{content.content[0].content}</p>
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
              <p>{dummy.comments.length}</p>
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
              <form>
                <input type='text' placeholder='댓글을 남겨보세요.' required></input>
                <input type='submit' value='등록' onClick={() => alert('게시물 업로드')}></input>
              </form>
            </div>
          </div>
          
          <Comment />

        </div>
      </div>
    </div>
  );
}

export default Post;