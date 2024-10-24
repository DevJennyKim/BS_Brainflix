import VideoPreview from '../VideoPreview/VideoPreview';
import './VideoList.scss';

function VideoList({ data, activeVideo, changeActiveVideo }) {
  return (
    <section className="videos">
      <h3 className="videos__title">next videos</h3>
      <div className="videos__list">
        {data
          .filter((video) => video.id !== activeVideo)
          .map((video) => (
            <VideoPreview
              key={video.id}
              video={video}
              isActive={video.id === activeVideo}
              changeActiveVideo={changeActiveVideo}
            />
          ))}
      </div>
    </section>
  );
}

export default VideoList;
