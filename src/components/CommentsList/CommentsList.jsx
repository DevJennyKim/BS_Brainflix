import './CommentsList.scss';
import { useState } from 'react';
import axios from 'axios';
import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/icons/add_comment.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';

function CommentsList({ comments, videoId, API_URL, API_KEY }) {
  const [newComment, setNewComment] = useState('');
  const [formError, setFormError] = useState(true);

  const handleChangeComment = (event) => {
    setNewComment(event.target.value);
    if (event.target.value) {
      setFormError(false);
    }
  };
  const isFormValid = () => {
    return !!newComment;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormValid()) {
      setFormError(true);
      const newCommentData = {
        name: 'Mohan Muruge', // what should I do for this name..?
        comment: newComment,
      };
      try {
        const response = await axios.post(
          `${API_URL}${videoId}/comments?api_key=${API_KEY}`,
          newCommentData
        );
        console.log(response.data);
        setNewComment('');
      } catch (error) {
        console.error('error adding comments: ', error);
      }
    } else {
      setFormError(false);
    }
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
                !formError ? 'comments__input--error' : ''
              }`}
              onChange={handleChangeComment}
              cols={30}
              rows={5}
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
          <CommentsItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
}

export default CommentsList;
