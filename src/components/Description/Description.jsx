import TimeAgo from 'react-timeago';
import './Description.scss';
import viewIcons from '../../assets/icons/views.svg';
import likeIcons from '../../assets/icons/likes.svg';

function Description({ video }) {
  return (
    <section className="description">
      <h1 className="description__title">{video.title}</h1>
      <div className="description__details">
        <div className="description__info">
          <h3 className="description__info-author">By {video.channel}</h3>
          <p className="description__info-date">
            <TimeAgo date={video.timestamp} />
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
