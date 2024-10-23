import './VideoScreen.scss';

function VideoScreen() {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
      ></video>
    </section>
  );
}

export default VideoScreen;
