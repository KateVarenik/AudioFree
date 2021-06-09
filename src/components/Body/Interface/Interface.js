import { useState, useEffect } from "react";

import CardProduct from "../../Catalog/CardProduct/CardProduct";
import "./Interface.css";
import MoreModels from "./MoreModels";
import FilterItem from "./FilterItem";
import CATALOG from "../../../Consts/catalog/catalog";

export default function Interface() {
  const [filterArr, setFiltredArr] = useState([]);
  const [activeFilter, setActiveFilter] = useState("apple");

  useEffect(() => {
    setFiltredArr(
      CATALOG.filter(({ isBanner }) => !isBanner)
        .filter((item) => item.tags?.includes(activeFilter))
        .filter((item, index) => index <= 2)
    );
  }, [activeFilter]);

  return (
    <div className="interface">
      <div className="interface__container container">
        <div className="interface__content">
          <h3 className="interface__sibtitle">100% совместимость</h3>
          <h2 className="interface__title">с любым интерфейсом</h2>
        </div>
        <div className="interface__items">
          <div className="interface__sort">
            <FilterItem
              active={activeFilter}
              onClick={(newActiveFilter) => setActiveFilter(newActiveFilter)}
            />
            <MoreModels />
          </div>

          {filterArr.map((product) => (
            <div className="interface__item" key={product.id}>
              <CardProduct {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
