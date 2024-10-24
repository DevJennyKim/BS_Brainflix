import './Hero.scss';

function Hero({ videoUrl, posterImage }) {
  return (
    <section className="hero">
      <video
        className="hero__video"
        controls
        poster={posterImage}
        src={videoUrl}
      ></video>
    </section>
  );
}

export default Hero;
