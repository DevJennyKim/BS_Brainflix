import './Header.scss';

function Header() {
  return (
    <header className="nav">
      <div class>
        <img
          src="../../assets/images/logo/BrainFlix-logo.svg"
          alt="BrainFlix-logo"
          className="nav__logo"
        />
        <div className="nav__features">
          <div className="nav__input-wrapper">
            <img
              src="../../assets/images/icons/search.svg"
              alt="Search"
              className="nav__input-icon"
            />
            <input
              type="text"
              placeholder="Search"
              className="nav__input-box"
            />
          </div>
          <button type="button" className="nav__btn-upload">
            <img
              src="../../assets/images/icons/upload.svg"
              alt="Upload"
              className="nav__btn-upload-img"
            />
            upload
          </button>
          <img
            src="../../assets/images/images/Mohan-muruge.jpg"
            alt="Profile"
            className="nav__profile"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
