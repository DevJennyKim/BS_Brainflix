import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import VideoList from './components/VideoList/VideoList';
import CommentsList from './components/CommentsList/CommentsList';
import data from './data/video-details.json';

function App() {
  const [activeVideoId, setActiveVideoId] = useState(data[0].id);

  const changeActiveVideo = (id) => {
    setActiveVideoId(id);
  };
  const selectedVideo =
    videoContent.find((video) => video.id === activeVideoId) || data[0];

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
            <Description video={selectedVideo} />
            <CommentsList comments={selectedVideo.comments} />
          </div>
          <div className="bottom__block2">
            <VideoList
              data={data}
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
