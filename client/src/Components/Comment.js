import recommend from '../Icons/recommend.svg'
import dummy from './comments.json'

function Comment() {
  return (
    <div className='commentLists'>
      {dummy.comments.map((comment) =>
        <div key={comment.id}>
          <div>
            <div>
              <p>{comment.userId}</p>
              <div>{comment.mbti}</div>
              <p>{comment.time.split(' ')[0]}</p>
            </div>
            <div>
              <button onClick={() => alert('댓글 삭제')}>x</button>
              {/* <div>{comment.agree === 'true' ? '찬성' : '반대'}</div> */}
              <div>{comment.agree}</div>
              <p>공감</p>
              <p>{comment.likes}</p>
            </div>
          </div>
          
          <div>
            <div>
                <p>{comment.comment}</p>
                <img src={recommend} alt='Recommend Icon' onClick={() => alert('추천')}></img>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment