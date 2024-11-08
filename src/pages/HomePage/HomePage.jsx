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

  const API_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getVideo = async () => {
      try {
        const { data } = await axios.get(`${API_URL}`);
        setVideoData(data);
        if (!videoId) {
          setActiveVideoId(data[0].id);
        }
      } catch (error) {
        console.error('Fetching error: ', error);
      }
    };
    getVideo();
  }, [videoId]);

  const changeActiveVideo = (id) => {
    setActiveVideoId(id);
  };

  useEffect(() => {
    const getSelectedVideo = async () => {
      if (activeVideoId) {
        try {
          const { data } = await axios.get(`${API_URL}${activeVideoId}`);
          setSelectedVideo(data);
        } catch (error) {
          console.error('Selected video fetching error:', error);
        }
      }
    };
    getSelectedVideo();
  }, [activeVideoId]);

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
              <CommentsList videoId={activeVideoId} API_URL={API_URL} />
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
