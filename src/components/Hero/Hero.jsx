import './Hero.scss';

function Hero({ videoUrl, posterImage }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        poster={posterImage}
        key={videoUrl}
        controls
      >
        <source src={videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support the video.
      </video>
    </section>
  );
}

export default Hero;
