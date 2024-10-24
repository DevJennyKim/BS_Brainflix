import './Header.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg';
import serchIcon from '../../assets/images/icons/search.svg';
import uploadIcon from '../../assets/images/icons/upload.svg';
import profileImg from '../../assets/images/images/Mohan-muruge.jpg';

function Header() {
  return (
    <header className="nav">
      <div className="nav__wrapper">
        <a href="../../../index.html">
          <img src={logo} alt="BrainFlix-logo" className="nav__logo" />
        </a>
        <div className="nav__features">
          <div className="nav__input">
            <img src={serchIcon} alt="Search" className="nav__input-icon" />
            <input
              type="text"
              placeholder="Search"
              className="nav__input-box"
            />
          </div>
          <button type="button" className="nav__btn-upload">
            <img
              src={uploadIcon}
              alt="Upload"
              className="nav__btn-upload-icon"
            />
            upload
          </button>
          <div className="nav__profile">
            <img src={profileImg} alt="Profile" className="nav__profile-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
