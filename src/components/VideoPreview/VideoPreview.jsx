import './VideoPreview.scss';
import preViewImg from '../../assets/images/images/Upload-video-preview.jpg';
function VideoPreview() {
  return (
    <div className="videos__item">
      <img src={preViewImg} alt="PreView" className="videos__item-img" />
      <div className="videos__item-info">
        <h3 className="videos__item-title">BMX Rampage: 2021 Highlights</h3>
        <p className="videos__item-author">by Jenny</p>
      </div>
    </div>
  );
}

export default VideoPreview;
