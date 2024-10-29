import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Description from '../../components/Description/Description';
import VideoList from '../../components/VideoList/VideoList';
import CommentsList from '../../components/CommentsList/CommentsList';
// import data from '../../data/video-details.json';

function HomePage() {
  const [videoData, setVideoData] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const API_KEY = '760904be-166b-45d5-9bb5-76d6e2ccc66a';
  const api_url =
    'https://unit-3-project-api-0a5620414506.herokuapp.com/videos/';
  useEffect(() => {
    const getVideo = async () => {
      try {
        const { data } = await axios.get(`${api_url}?api_key=${API_KEY}`);
        setVideoData(data);
        if (data.length > 0) {
          setActiveVideoId(data[0].id);
        }
      } catch (error) {
        console.error('Fetching error: ', error);
      }
    };
    getVideo();
    console.log(videoData);
  }, []);

  // const selectedVideo =
  //   videoData.find((video) => video.id === activeVideoId) || null;
  const changeActiveVideo = (id) => {
    setActiveVideoId(id);
  };

  useEffect(() => {
    const getSelectedVideo = async () => {
      if (activeVideoId) {
        try {
          const { data } = await axios.get(
            `${api_url}${activeVideoId}?api_key=${API_KEY}`
          );
          setSelectedVideo(data);
        } catch (error) {
          console.error('Selected video fetching error:', error);
        }
      }
    };
    getSelectedVideo();
    console.log('videoData:', videoData);
    console.log('selectedVideo :', selectedVideo);
  }, [activeVideoId]);

  const useTimeStamp = (timeStamp) => {
    const currentDate = new Date();

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
    <main>
      {selectedVideo ? (
        <>
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

export default HomePage;
