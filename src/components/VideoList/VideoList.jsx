import VideoPreview from '../VideoPreview/VideoPreview';
import './VideoList.scss';

function VideoList() {
  return (
    <section className="videos">
      <h3 className="videos__title">next video</h3>
      <div className="videos__list">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
    </section>
  );
}

export default VideoList;
