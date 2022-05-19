import dummy from './comments.json'

function Dummy() {
  return (
    <div className='comments'>
      {dummy.comments.map((comment) => 
        <div key={comment.id}>
          <p>{comment.comment}</p>
          <p>{comment.agree}</p>
        </div>
      )}
    </div>
  );
}

export default Dummy;