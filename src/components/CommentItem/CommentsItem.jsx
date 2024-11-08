import TimeAgo from 'react-timeago';
import axios from 'axios';
import deleteIcon from '../../assets/icons/delete.svg';
import './CommentsItem.scss';

function CommentsItem({
  commentId,
  comment,
  videoId,
  API_URL,

  setComments,
}) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${API_URL}${videoId}/comments/${commentId}`
      );
      setComments((originalCommentData) =>
        originalCommentData.filter((item) => item.id !== commentId)
      );
    } catch (error) {
      console.error('error deleting comments: ', error);
    }
  };
  return (
    <>
      <div className="comments__item">
        <div className="comments__item-profile"></div>
        <div className="comments__item-container">
          <div className="comments__author-wrapper">
            <h4 className="comments__author">{comment.name}</h4>
            <p className="comments__date">
              <TimeAgo date={new Date(comment.timestamp)} />
            </p>
          </div>
          <p className="comments__text">{comment.comment}</p>
          <button
            className="comments__delete"
            onClick={handleDelete}
            type="submit"
          >
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
