import "./TestContent.css";

export default function TestContent(props) {
  return (
    <p className={`test__content ${props.className}`}>
      Пройдите тест и получите <span>скидку до 10% </span> на первую покупку
    </p>
  );
}
