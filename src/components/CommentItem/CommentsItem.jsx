import TimeAgo from 'react-timeago';
import deleteIcon from '../../assets/icons/delete.svg';
import './CommentsItem.scss';

function CommentsItem({ commentId, comment, videoId, API_URL, API_KEY }) {
  const handleDelete = async () => {
    console.log(commentId);
    try {
      const response = await axios.delete(
        `${API_URL}${videoId}/comments/${commentId}?api_key=${API_KEY}`
      );
      return console.log(response.data);
    } catch (error) {
      'error deleting comments: ', error;
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
              <TimeAgo date={comment.timestamp} />
            </p>
          </div>
          <p className="comments__text">{comment.comment}</p>
          <button className="comments__delete" onClick={handleDelete}>
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
