import "./Title.css";

export default function Title({ title, style }) {
  return (
    <div className="cart__title" style={style}>
      <p>{title}</p>
    </div>
  );
}
