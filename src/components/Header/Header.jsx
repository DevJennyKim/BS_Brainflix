import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/icons/search.svg';
import uploadIcon from '../../assets/icons/upload.svg';
import profileImg from '../../assets/images/Mohan-muruge.jpg';

function Header() {
  return (
    <header className="nav">
      <div className="nav__wrapper">
        <Link to="/">
          <img src={logo} alt="BrainFlix-logo" className="nav__logo" />
        </Link>
        <div className="nav__features">
          <div className="nav__input-container">
            <div className="nav__input">
              <img src={searchIcon} alt="Search" className="nav__input-icon" />
              <input
                type="text"
                placeholder="Search"
                className="nav__input-field"
              />
            </div>
            <div className="nav__profile nav__profile--mobile">
              <img
                src={profileImg}
                alt="Profile"
                className="nav__profile-img"
              />
            </div>
          </div>
          <Link to="/upload" className="nav__btn-link">
            <button type="button" className="nav__btn-upload">
              <img
                src={uploadIcon}
                alt="Upload"
                className="nav__btn-upload-icon"
              />
              upload
            </button>
          </Link>
          <div className="nav__profile nav__profile--desktop">
            <img src={profileImg} alt="Profile" className="nav__profile-img" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
