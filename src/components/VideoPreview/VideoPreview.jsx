import './VideoPreview.scss';
function VideoPreview({ video, isActive, changeActiveVideo }) {
  const handleClick = () => {
    changeActiveVideo(video.id);
  };
  return (
    <div
      className={`videos__item ${isActive ? 'videos__item--active' : ''}`}
      onClick={handleClick}
    >
      <img src={video.image} alt={video.title} className="videos__item-img" />
      <div className="videos__item-info">
        <h3 className="videos__item-title">{video.title}</h3>
        <p className="videos__item-author">By {video.channel}</p>
      </div>
    </div>
  );
}

export default VideoPreview;
