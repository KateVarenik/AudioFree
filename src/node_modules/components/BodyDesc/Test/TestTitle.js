import "./TestTitle.css";

export default function TestTitle(props) {
  return (
    <h3 className={`test__title ${props.className}`}>
      <span>Подберем 5 лучших моделей </span>беспроводных наушников под Ваши
      цели
    </h3>
  );
}
