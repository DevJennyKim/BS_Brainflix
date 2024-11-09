import TimeAgo from 'react-timeago';
import './Description.scss';
import viewIcons from '../../assets/icons/views.svg';
import likeIcons from '../../assets/icons/likes.svg';
import { useState } from 'react';
import axios from 'axios';

function Description({ video, API_URL }) {
  const [like, setLike] = useState(0);

  console.log(video);

  const handleLike = async () => {
    try {
      await axios.put(`${API_URL}${video.id}/likes`);
      setLike((prevLike) => prevLike + 1);
    } catch (error) {
      console.error('Like Put Error: ', error);
    }
  };

  return (
    <section className="description">
      <h1 className="description__title">{video.title}</h1>
      <div className="description__details">
        <div className="description__info">
          <h3 className="description__info-author">By {video.channel}</h3>
          <p className="description__info-date">
            <TimeAgo date={new Date(video.timestamp)} />
          </p>
        </div>
        <div className="description__count">
          <div className="description__views">
            <img
              src={viewIcons}
              alt="Views Icon"
              className="description__views-icon"
            />
            <p className="description__views-count">{video.views}</p>
          </div>
          <div className="description__likes">
            <img
              src={likeIcons}
              alt="Likes Icon"
              className="description__likes-icon"
              onClick={handleLike}
            />
            <p className="description__likes-count">{video.likes}</p>
          </div>
        </div>
      </div>
      <p className="description__summary">{video.description}</p>
    </section>
  );
}

export default Description;
