import "./Filter-title.css";
import Controls from "../../../Icons/Filter";

export default function FilterTitle() {
  return (
    <div className="filter-title">
      <h4 className="filter-title__name">Фильтр товаров</h4>
      <div className="filter-title__button">
        <Controls />
      </div>
    </div>
  );
}
