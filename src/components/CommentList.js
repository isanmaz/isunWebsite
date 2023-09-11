const CommentList = ({ comments }) => (
  <>
    <h3>Comments:</h3>
    {comments.map((c) => (
      <div className="comment" key={c.postedBy + ": " + c.text}>
        <h4>{c.postedBy}</h4>
        <h4>{c.text}</h4>
      </div>
    ))}
  </>
);
export default CommentList;
