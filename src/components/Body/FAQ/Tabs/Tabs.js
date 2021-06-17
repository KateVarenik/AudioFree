import FAQ from "../../../../Consts/FAQ/faq";
import "./Tabs.css";

export default function TabItem({ active, onClick }) {
  return (
    <div className="faq__tabs-questions">
      {FAQ.map(({ topic, name }, index) => (
        <div
          key={topic}
          className={`faq__tabs-question ${active === topic && "active"}`}
          onClick={() => onClick(topic)}
        >
          <button>{name}</button>
          {index !== FAQ.length - 1 && active !== topic && <hr />}
        </div>
      ))}
    </div>
  );
}
