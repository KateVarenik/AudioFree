import { useState, useEffect } from "react";

import CardProduct from "../../Catalog/CardProduct/CardProduct";
import "./Interface.css";
import MoreModels from "./MoreModels";
import FilterItem from "./FilterItem";
import CATALOG from "../../../Consts/catalog/catalog";
import Subtitle from "../../General/Title/Subtitle";
import MainTitle from "../../General/Title/MainTitle";

export default function InterfaceDesk() {
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
      <div className="interface__container container-l">
        <div className="interface__content">
          <Subtitle>100% совместимость</Subtitle>
          <MainTitle>с любым интерфейсом</MainTitle>
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
