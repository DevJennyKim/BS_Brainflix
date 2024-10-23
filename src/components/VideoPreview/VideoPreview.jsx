import './VideoPreview.scss';
import preViewImg from '../../assets/images/images/Upload-video-preview.jpg';
function VideoPreview() {
  return (
    <div className="preview">
      <img src={preViewImg} alt="PreView" className="preview__img" />
      <div className="preview__info">
        <h3 className="preview__info-title">BMX Rampage: 2021 Highlights</h3>
        <p className="preview__info-author">by Jenny</p>
      </div>
    </div>
  );
}

export default VideoPreview;
