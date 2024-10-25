import './CommentsList.scss';

import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import profileImg from '../../assets/images/images/Mohan-muruge.jpg';
function CommentsList({ comments, timeStamp }) {
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

        <form className="comments__form" id="commentForm">
          <label className="comments__input-label">
            join the conversation
            <textarea
              type="text"
              name="comments"
              id="comments"
              placeholder="Add a new comment"
              className="comments__input"
              cols="30"
              rows="5"
            ></textarea>
          </label>
          <button type="submit" className="comments__submit" id="commentsBtn">
            <img src={commentIcon} alt="" className="comments__submit-icon" />
            comment
          </button>
        </form>
      </div>

      <div className="comments__list">
        {comments.map((comment) => (
          <CommentsItem
            key={comment.id}
            comment={comment}
            timeStamp={timeStamp}
          />
        ))}
      </div>
    </section>
  );
}

export default CommentsList;
