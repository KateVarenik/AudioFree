import "./Photo.css";

export default function Photo({ image, title, style }) {
  return (
    <div className="card__photo" style={style}>
      <img src={image} alt={title} />
    </div>
  );
}
