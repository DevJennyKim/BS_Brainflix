import './Hero.scss';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';
import close_fullscreenIcon from '../../assets/icons/close_fullscreen.svg';
import scrubIcon from '../../assets/icons/scrub.svg';
import { useRef, useState } from 'react';

function Hero({ videoUrl, posterImage }) {
  const [range, setRange] = useState(0);
  const play = useRef();
  const pause = useRef();
  const fullscreen = useRef();
  const close_fullscreen = useRef();
  const scrub = useRef();
  return (
    <section className="hero">
      <video className="hero__video" poster={posterImage}>
        <source src={videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support the video.
      </video>
      <div className="hero__video-controls">
        <button className="hero__video-play" ref={play}>
          <img src={playIcon} alt="play" />
        </button>
        <button className="hero__video-pause" ref={pause}>
          <img src={pauseIcon} alt="pause" />
        </button>
        <input
          type="range"
          className="hero__video-progressBar"
          value={range}
          min={0}
          max={100}
          step={1}
        />
        <button className="hero__video-fullscreen" ref={fullscreen}>
          <img src={fullscreenIcon} alt="fullscreen" />
        </button>
        <button className="hero__video-close-fullscreen" ref={close_fullscreen}>
          <img src={close_fullscreenIcon} alt="close_fullscreen" />
        </button>
        <button className="hero__video-scrub" ref={scrub}>
          <img src={scrubIcon} alt="scrub" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
