import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import VideoList from './components/VideoList/VideoList';
import CommentsList from './components/CommentsList/CommentsList';
import data from './data/video-details.json';

function App() {
  const [activeVideo, setActiveVideo] = useState([data[0]]);

  const changeActiveVideo = (id) => {
    console.log(activeVideo); //this is id.
    setActiveVideo(id);
  };
  //need to get the array data not just id value.
  const selectedVideo =
    data.find((video) => video.id === activeVideo) || data[0];

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
            <CommentsList comment={selectedVideo.comments} />
          </div>
          <div className="bottom__line"></div>
          <div className="bottom__block2">
            <VideoList
              data={data}
              activeVideo={activeVideo}
              changeActiveVideo={changeActiveVideo}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
