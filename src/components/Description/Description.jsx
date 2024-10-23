import './Description.scss';
import viewIcons from '../../assets/images/icons/views.svg';
import likeIcons from '../../assets/images/icons/likes.svg';

function Description() {
  return (
    <section className="description">
      <h1 className="description__title">Title</h1>
      <div className="description__details">
        <div className="description__info">
          <h3 className="description__info-author">By Jenny</h3>
          <p className="description__info-date">2024.01.00</p>
        </div>
        <div className="description__count">
          <div className="description__views">
            <img
              src={viewIcons}
              alt="Views Icon"
              className="description__views-icon"
            />
            <p className="description__views-count">NumView</p>
          </div>
          <div className="description__likes">
            <img
              src={likeIcons}
              alt="Likes Icon"
              className="description__likes-icon"
            />
            <p className="description__likes-count">NumLike</p>
          </div>
        </div>
      </div>
      <div className="description__line"></div>
      <p className="description__summary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, harum
        aliquid. Cumque eos reprehenderit aliquam sint, aut, earum porro ab est
        quas dignissimos molestiae ipsa maxime, odio sapiente. Odit, tenetur.
      </p>
    </section>
  );
}

export default Description;
