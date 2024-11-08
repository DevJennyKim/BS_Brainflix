import './CommentsList.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsItem from '../CommentItem/CommentsItem';
import commentIcon from '../../assets/icons/add_comment.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';

function CommentsList({ videoId, API_URL }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [formError, setFormError] = useState(true);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(`${API_URL}${videoId}`);
        setComments(response.data.comments);
      } catch (error) {
        console.error('error fetching comments: ', error);
      }
    };
    getComments();
  }, [videoId]);

  const handleChangeComment = (event) => {
    setNewComment(event.target.value);
    if (event.target.value) {
      setFormError(true);
    }
  };
  const isFormValid = () => {
    if (!newComment) {
      return false;
    } else {
      return true;
    }
  };
  const handleCommentPost = async (newCommentData) => {
    try {
      const response = await axios.post(
        `${API_URL}${videoId}/comments`,
        newCommentData
      );

      setComments((originalCommentData) => [
        response.data,
        ...originalCommentData,
      ]);
      setNewComment('');
    } catch (error) {
      console.error('error adding comments: ', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      handleCommentPost({
        name: 'Jenny Kim',
        comment: newComment,
      });
      setFormError(true);
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
              value={newComment}
              placeholder="Add a new comment"
              className={`comments__input ${
                !formError ? 'comments__input--error' : ''
              }`}
              onChange={handleChangeComment}
            ></textarea>
          </label>
          <button type="submit" className="comments__submit" id="commentsBtn">
            <img src={commentIcon} alt="" className="comments__submit-icon" />
            comment
          </button>
        </form>
      </div>

      <div className="comments__list">
        {comments.length === 0 ? (
          <div className="comments__no-comments">
            <p className="comments__no-comments-p">There are no comments</p>
          </div>
        ) : (
          comments
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map((comment) => (
              <CommentsItem
                key={comment.id}
                commentId={comment.id}
                comment={comment}
                videoId={videoId}
                API_URL={API_URL}
                setComments={setComments}
              />
            ))
        )}
      </div>
    </section>
  );
}

export default CommentsList;
