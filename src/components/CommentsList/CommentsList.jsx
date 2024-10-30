import './CommentsList.scss';
import { useState } from 'react';
import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/icons/add_comment.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';
function CommentsList({ comments }) {
  const [newComment, setNewComment] = useState('');
  const [, setFormSubmitted] = useState('');
  const handleChangeComment = (event) => {
    setNewComment(event.target.value);
  };
  const isFormValid = () => {
    if (!newComment) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log('test succeed!');
    } else console.log('error');
    setFormSubmitted;
  };
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

        <form
          className="comments__form"
          id="commentForm"
          onSubmit={handleSubmit}
        >
          <label className="comments__input-label">
            join the conversation
            <textarea
              type="text"
              name="comments"
              id="comments"
              placeholder="Add a new comment"
              className={`comments__input ${
                !isFormValid ? 'comments__input--error' : ''
              }`}
              onChange={handleChangeComment}
              cols="30"
              rows="5"
            ></textarea>
          </label>
          <button
            type="submit"
            className="comments__submit"
            id="commentsBtn"
            disabled={!isFormValid()}
          >
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
