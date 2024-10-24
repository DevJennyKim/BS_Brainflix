import './CommentsList.scss';
import { useState } from 'react';
import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/images/icons/add_comment.svg';
import profileImg from '../../assets/images/images/Mohan-muruge.jpg';
function CommentsList({}) {
  // const [comment, setComment] = useState([data.comment]);
  return (
    <section className="comments">
      <h3 className="comments__title">3 Comments</h3>
      <div className="comments__wrapper">
        <div className="comments__profile">
          <img
            src={profileImg}
            alt="profile"
            className="comments__profile-img"
          />
        </div>
        <form action="" className="comments__form">
          <label htmlFor="" className="comments__input-label">
            join the conversation
            <input
              type="text"
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
      <div className="comments__line"></div>
      <div className="comments__list">
        <CommentsItem />
      </div>
    </section>
  );
}

export default CommentsList;
