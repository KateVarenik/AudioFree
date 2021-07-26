import "./Filter-title.css";
import Controls from "../../../../components/Icons/Filter";

export default function FilterTitle(props) {
  return (
    <div className={`filter-title ${props.className}`}>
      <h3 className="filter-title__name">Фильтр товаров</h3>
      <div className="filter-title__button">
        <Controls />
      </div>
    </div>
  );
}
