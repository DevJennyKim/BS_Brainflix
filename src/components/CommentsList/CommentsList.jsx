import './CommentsList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/icons/add_comment.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';

function CommentsList({
  comments: initialComments,
  videoId,
  API_URL,
  API_KEY,
}) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [formError, setFormError] = useState(true);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const handleChangeComment = (event) => {
    setNewComment(event.target.value);
    if (event.target.value) {
      setFormError(true);
    }
  };
  const isFormValid = () => {
    return !!newComment;
  };
  const handleCommentPost = async (newCommentData) => {
    try {
      const response = await axios.post(
        `${API_URL}${videoId}/comments?api_key=${API_KEY}`,
        newCommentData
      );

      setComments((originalCommentData) => [
        response.data,
        ...originalCommentData,
      ]);
    } catch (error) {
      console.error('error adding comments: ', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      handleCommentPost({
        name: 'Mohan Muruge', // what should I do for this name..?
        comment: newComment,
      });

      setFormError(true);
      setNewComment('');
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
        {comments
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .map((comment) => (
            <CommentsItem
              key={comment.id}
              commentId={comment.id}
              comment={comment}
              videoId={videoId}
              API_URL={API_URL}
              API_KEY={API_KEY}
            />
          ))}
      </div>
    </section>
  );
}

export default CommentsList;
