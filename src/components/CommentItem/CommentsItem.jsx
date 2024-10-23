import './CommentsItem.scss';

function CommentsItem() {
  return (
    <>
      <div className="comments__item">
        <div className="comments__item-profile"></div>
        <div className="comments__item-container">
          <div className="comments__author-wrapper">
            <h4 className="comments__author">Jenny</h4>
            <p className="comments__date">2024.00.00</p>
          </div>
          <p className="comments__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            aspernatur quis nulla, quidem non dignissimos earum iste incidunt.
            Nam sequi exercitationem adipisci molestias ea minima dolore magni
            libero. Velit, officia?
          </p>
        </div>
      </div>
      <div className="comments__line"></div>
    </>
  );
}

export default CommentsItem;
