import './CommentsList.scss';

import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import profileImg from '../../assets/images/images/Mohan-muruge.jpg';
function CommentsList({ comments }) {
  return (
    <section className="comments">
      <h3 className="comments__title">{comments.length} Comments</h3>
      <div className="comments__wrapper">
        <div className="comments__profile">
          <img
            src={profileImg}
            alt="profile"
            className="comments__profile-img"
          />
        </div>

        <form className="comments__form">
          <label htmlFor="" className="comments__input-label">
            join the conversation
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              className="comments__input"
            />
          </label>
          <button type="submit" className="comments__submit">
            <img src={commentIcon} alt="" className="comments__submit-icon" />
            comment
          </button>
        </form>
      </div>

      <div className="comments__list">
        {comments.map((comment) => (
          <CommentsItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

export default CommentsList;
