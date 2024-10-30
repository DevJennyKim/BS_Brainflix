import TimeAgo from 'react-timeago';
import deleteIcon from '../../assets/icons/delete.svg';
import './CommentsItem.scss';

function CommentsItem({ comment }) {
  return (
    <>
      <div className="comments__item">
        <div className="comments__item-profile"></div>
        <div className="comments__item-container">
          <div className="comments__author-wrapper">
            <h4 className="comments__author">{comment.name}</h4>
            <p className="comments__date">
              <TimeAgo date={comment.timestamp} />
            </p>
          </div>
          <p className="comments__text">{comment.comment}</p>
          <button className="comments__delete">
            <img
              src={deleteIcon}
              alt="deleteIcon"
              className="comments__delete-icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentsItem;
