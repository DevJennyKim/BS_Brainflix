import './Hero.scss';
import play from '../../assets/icons/play.svg';
import pause from '../../assets/icons/pause.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';
import close_fullscreen from '../../assets/icons/close_fullscreen.svg';
import scrub from '../../assets/icons/scrub.svg';

function Hero({ videoUrl, posterImage }) {
  return (
    <section className="hero">
      <video className="hero__video" poster={posterImage}>
        <source src={videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support the video.
      </video>
      <div className="hero__video-controls">
        <button className="hero__video-play">
          <img src={play} alt="play" />
        </button>
        <button className="hero__video-pause">
          <img src={pause} alt="pause" />
        </button>
        <input
          type="range"
          className="hero__video-progressBar"
          value={0}
          min={0}
          max={100}
          step={1}
        />
        <button className="hero__video-fullscreen">
          <img src={fullscreen} alt="fullscreen" />
        </button>
        <button className="hero__video-close-fullscreen">
          <img src={close_fullscreen} alt="close_fullscreen" />
        </button>
        <button className="hero__video-scrub">
          <img src={scrub} alt="scrub" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
