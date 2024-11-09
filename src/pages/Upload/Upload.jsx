import { useNavigate } from 'react-router-dom';
import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import publish from '../../assets/icons/publish.svg';
import './Upload.scss';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Upload() {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_BASE_URL;
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newFile, setNewFile] = useState(null);
  const [descError, setDescError] = useState(true);
  const [titleError, setTitleError] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(thumbnail);

  useEffect(() => {
    if (newFile) {
      const objectUrl = URL.createObjectURL(newFile);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(thumbnail);
    }
  }, [newFile]);

  const redirecting = () => {
    Swal.fire({
      position: 'center-center',
      showConfirmButton: false,
      timer: 1200,
      timerProgressBar: true,
      icon: 'warning',
      title: 'Redirecting to homepage',
      didClose: () => {
        navigate('/');
      },
    });
  };
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
    let imgUrl = 'Upload-video-preview.jpg';
    if (newFile) {
      imgUrl = await handleVideoImgPost();
    }
    if (isFormValid()) {
      handleVideoPost({
        title: newTitle,
        description: newDesc,
        image: imgUrl,
      });
      setTitleError(true);
      setDescError(true);
      Swal.fire({
        icon: 'success',
        title: 'Video Upload Successful!',
        text: 'Your video has been successfully uploaded!',
        position: 'center-center',
        timer: 1500,
        showConfirmButton: false,
        didClose: () => {
          navigate('/');
        },
      });
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
                    src={previewUrl}
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
              type="button"
              className="upload__btn-cancel"
              onClick={() => {
                redirecting();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="upload__btn-publish">
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
