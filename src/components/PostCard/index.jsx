import P from "prop-types";
import "./styles.css";

export const PostCard = ({ id, title, body, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2 id={id}> {title} </h2>
      <p> {body} </p>
    </div>
  </div>
);

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
};
