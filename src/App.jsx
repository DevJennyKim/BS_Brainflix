import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoScreen from './components/VideoScreen/VideoScreen';
import Description from './components/Description/Description';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <VideoScreen />
        <div className="bottom">
          <div className="bottom__block1">
            <Description />
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
