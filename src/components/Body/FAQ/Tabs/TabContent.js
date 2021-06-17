import "./TabContent.css";
import { Link } from "react-router-dom";

export default function TabContent({ topic, title, desc, btn }) {
  return (
    <div className="faq__tabs-pannel">
      <h4 className="faq__tabs-title">{title}</h4>
      <p className="faq__tabs-desc">{desc}</p>
      <Link to="/blog" className="faq__tabs-link">
        {btn}
      </Link>
    </div>
  );
}
