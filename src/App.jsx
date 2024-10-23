import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import VideoList from './components/VideoList/VideoList';
import CommentsList from './components/CommentsList/CommentsList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bottom">
          <div className="bottom__block1">
            <Description />
            <CommentsList />
          </div>
          <div className="bottom__line"></div>
          <div className="bottom__block2">
            <VideoList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
