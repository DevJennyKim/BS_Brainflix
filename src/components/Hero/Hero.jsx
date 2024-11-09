import './Hero.scss';
import playIcon from '../../assets/icons/play.svg';
import pauseIcon from '../../assets/icons/pause.svg';
import fullscreenIcon from '../../assets/icons/fullscreen.svg';

import { useEffect, useRef, useState } from 'react';

function Hero({ videoUrl, posterImage }) {
  const [range, setRange] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const video = videoRef.current;
  const videoPlayPause = () => {
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const controlProgress = () => {
    setRange((video.currentTime / video.duration) * 100);
    setCurrentTime(video.currentTime);
  };

  useEffect(() => {
    if (video) {
      setDuration(video.duration);
      video.addEventListener('timeupdate', controlProgress);
      return () => {
        video.removeEventListener('timeupdate', controlProgress);
      };
    }
  }, [video]);

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * video.duration;
    video.currentTime = newTime;
  };
  const requestFullscreen = () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <section className="hero">
      <video
        className="hero__video"
        poster={posterImage}
        ref={videoRef}
        key={videoUrl}
      >
        <source src={videoUrl} type="video/mp4" />
        Sorry, your browser doesn't support the video.
      </video>
      <div className="hero__video-controls">
        <button className="hero__video-play" onClick={videoPlayPause}>
          <img src={playIcon} alt="play" />
        </button>
        <button className="hero__video-pause" onClick={videoPlayPause}>
          <img src={pauseIcon} alt="pause" />
        </button>
        <input
          type="range"
          className="hero__video-progressBar"
          value={range}
          min={0}
          max={100}
          step={0.1}
          onChange={handleProgressChange}
        />
        <div className="hero__video-time">
          <span>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        <button className="hero__video-fullscreen">
          <img
            src={fullscreenIcon}
            alt="fullscreen"
            onClick={requestFullscreen}
          />
        </button>
      </div>
    </section>
  );
}

export default Hero;
