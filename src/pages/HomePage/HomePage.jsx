import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import VideoList from '../../components/VideoList/VideoList';
import CommentsList from '../../components/CommentsList/CommentsList';

function HomePage() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(videoId || null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const API_KEY = '760904be-166b-45d5-9bb5-76d6e2ccc66a';
  const API_URL =
    'https://unit-3-project-api-0a5620414506.herokuapp.com/videos/';

  useEffect(() => {
    const getVideo = async () => {
      try {
        const { data } = await axios.get(`${API_URL}?api_key=${API_KEY}`);
        setVideoData(data);
        if (!activeVideoId) {
          setActiveVideoId(data[0].id);
        }
      } catch (error) {
        console.error('Fetching error: ', error);
      }
    };
    getVideo();
  }, []);

  const changeActiveVideo = (id) => {
    setActiveVideoId(id);
  };

  useEffect(() => {
    const getSelectedVideo = async () => {
      if (activeVideoId) {
        try {
          const { data } = await axios.get(
            `${API_URL}${activeVideoId}?api_key=${API_KEY}`
          );
          console.log('setSelectedVideo data:', data);
          setSelectedVideo(data);
        } catch (error) {
          console.error('Selected video fetching error:', error);
        }
      }
    };
    getSelectedVideo();
  }, [activeVideoId]);
  console.log(selectedVideo);

  return (
    <main>
      {selectedVideo ? (
        <>
          <Hero
            videoUrl={selectedVideo.video}
            posterImage={selectedVideo.image}
          />
          <div className="bottom">
            <div className="bottom__block1">
              <Description video={selectedVideo} />
              <CommentsList
                comments={selectedVideo.comments}
                videoId={activeVideoId}
                API_URL={API_URL}
                API_KEY={API_KEY}
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
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </main>
  );
}

export default HomePage;
