import './CommentsItem.scss';

function CommentsItem({ comment, timeStamp }) {
  return (
    <>
      <div className="comments__item">
        <div className="comments__item-profile"></div>
        <div className="comments__item-container">
          <div className="comments__author-wrapper">
            <h4 className="comments__author">{comment.name}</h4>
            <p className="comments__date">
              {timeStamp(new Date(comment.timestamp).toLocaleDateString())}
            </p>
          </div>
          <p className="comments__text">{comment.comment}</p>
        </div>
      </div>
    </>
  );
}

export default CommentsItem;
