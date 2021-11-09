import "./ConsultSubtitle.css";

export default function ConsultSubtitle(props) {
  return (
    <h4 className={`consult__subtitle ${props.className}`}>
      Приятных и безопасных покупок!
    </h4>
  );
}
