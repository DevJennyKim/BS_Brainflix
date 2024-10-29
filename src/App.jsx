import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Upload from './pages/Upload/Upload';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
