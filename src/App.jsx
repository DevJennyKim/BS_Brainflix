import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import VideoList from './components/VideoList/VideoList';
import CommentsList from './components/CommentsList/CommentsList';
import data from './data/video-details.json';

function App() {
  const [videoData, setVideoData] = useState(data);
  const [activeVideoId, setActiveVideoId] = useState(videoData[0].id);

  const changeActiveVideo = (id) => {
    setActiveVideoId(id);
  };
  const selectedVideo =
    videoData.find((video) => video.id === activeVideoId) || videoData[0];

  const useTimeStamp = (timeStamp) => {
    const currentDate = new Date();
    const [timeAgo, setTimeAgo] = useState('');
    const sec = Math.floor((currentDate - timeStamp) / 1000);
    const min = Math.floor(sec / 60);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const month = Math.floor(weeks / 4);
    const years = Math.floor(month / 12);

    if (years >= 1) {
      return `${years} years ago`;
    } else if (month >= 1) {
      return `${month} month ago`;
    } else if (weeks >= 1) {
      return `${weeks} weeks ago`;
    } else if (days >= 1) {
      return `${days} days ago`;
    } else if (hours >= 1) {
      return `${hours} hours ago`;
    } else if (min >= 1) {
      return `${min} minutes ago`;
    } else {
      return `just now`;
    }
  };

  return (
    <>
      <Header />
      <main>
        <Hero
          videoUrl={selectedVideo.video}
          posterImage={selectedVideo.image}
        />
        <div className="bottom">
          <div className="bottom__block1">
            <Description video={selectedVideo} timeStamp={useTimeStamp} />
            <CommentsList
              comments={selectedVideo.comments}
              timeStamp={useTimeStamp}
            />
          </div>
          <div className="bottom__block2">
            <VideoList
              data={videoData}
              activeVideoId={activeVideoId}
              changeActiveVideo={changeActiveVideo}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
