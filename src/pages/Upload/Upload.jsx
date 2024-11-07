import { useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';
function Upload() {
  const navigate = useNavigate();
  const handleUpload = (event) => {
    event.preventDefault();
    alert('Video uploaded successfully!!');

    navigate('/');
  };
  return (
    <section className="upload">
      <div className="upload__wrapper">
        <h2 className="upload__title">Upload Video</h2>
        <form className="upload__form" id="uploadFrom">
          <div className="upload__container">
            <div className="upload__thumbnail">
              <p className="upload__thumbnail-title">video thumbnail</p>
              <img
                src={thumbnail}
                alt="thumbnail"
                className="upload__thumbnail-image"
              />
            </div>
            <div className="upload__input-wrapper">
              <label className="upload__label">
                title your video
                <input
                  type="text"
                  name="uploadTitle"
                  className="upload__input-title"
                  placeholder="Add a title to your video"
                />
              </label>
              <label className="upload__label">
                add a video description
                <textarea
                  type="text"
                  name="uploadDescription"
                  className="upload__input-description"
                  placeholder="Add a description to your video"
                />
              </label>
            </div>
          </div>
          <div className="upload__btn-container">
            <button
              className="upload__btn-cancel"
              onClick={() => {
                navigate('/');
              }}
            >
              Cancel
            </button>
            <button className="upload__btn-publish" onClick={handleUpload}>
              <img src={publish} alt="publish" className="upload__btn-icon" />
              Publish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Upload;
