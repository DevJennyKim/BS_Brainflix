import { useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Upload() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BASE_URL;
  const [video, setVideo] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newFile, setNewFile] = useState(null);
  const [descError, setDescError] = useState(true);
  const [titleError, setTitleError] = useState(true);
  const handleVideoImgPost = async () => {
    try {
      const formData = new FormData();
      formData.append('file', newFile);
      const response = await axios.post(`${API_URL}uploadImg`, formData);
      return response.data;
    } catch (error) {
      console.error('Uploading Image error : ', error);
    }
  };

  const handleVideoPost = async (newVideo) => {
    try {
      const response = await axios.post(`${API_URL}`, newVideo);
    } catch (error) {
      console.error('Uploading Error', error);
    }
  };

  const handleChangeTitle = async (event) => {
    setNewTitle(event.target.value);
  };
  const handleChangeDesc = async (event) => {
    setNewDesc(event.target.value);
  };
  const handleFileChange = (event) => {
    setNewFile(event.target.files[0]);
  };
  const isFormValid = () => {
    if (!newTitle || !newDesc) {
      return false;
    } else {
      return true;
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    const imgUrl = await handleVideoImgPost();
    if (isFormValid()) {
      handleVideoPost({
        title: newTitle,
        description: newDesc,
        image: newFile ? imgUrl : 'Upload-video-preview.jpg',
      });

      setTitleError(true);
      setDescError(true);
      alert('Video uploaded successfully!!');
      navigate('/');
    } else {
      setTitleError(newTitle);
      setDescError(newDesc);
    }
  };
  return (
    <section className="upload">
      <div className="upload__wrapper">
        <h2 className="upload__title">Upload Video</h2>
        <form className="upload__form" id="uploadFrom" onSubmit={handleUpload}>
          <div className="upload__container">
            <div className="upload__thumbnail">
              <p className="upload__thumbnail-title">video thumbnail</p>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={handleFileChange}
                className="upload__thumbnail--hidden"
              />
              <div className="upload__thumbnail-wrapper">
                <label htmlFor="file" className="upload__thumbnail-label">
                  <img
                    src={newFile ? URL.createObjectURL(newFile) : thumbnail}
                    alt="Thumbnail"
                    className="upload__thumbnail-image"
                  />
                </label>
              </div>
            </div>
            <div className="upload__input-wrapper">
              <label className="upload__label">
                title your video
                <input
                  type="text"
                  name="title"
                  className={`upload__input-title ${
                    !titleError ? 'upload__input-title--error' : ''
                  }`}
                  placeholder="Add a title to your video"
                  onChange={handleChangeTitle}
                />
              </label>
              <label className="upload__label">
                add a video description
                <textarea
                  type="text"
                  name="description"
                  className={`upload__input-description ${
                    !descError ? 'upload__input-description--error' : ''
                  }`}
                  placeholder="Add a description to your video"
                  onChange={handleChangeDesc}
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
