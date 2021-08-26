import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CATALOG from "../../../Consts/catalog/catalog";
import FilterItem from "../../BodyDesc/Interface/FilterItem";
import MoreModels from "../../BodyDesc/Interface/MoreModels";
import CardProductMob from "../../Catalog/CardProduct/CardProductMob";
import MainTitle from "../../General/Title/MainTitle";
import Subtitle from "../../General/Title/Subtitle";
import Slide from "../../../img/slide.svg";

import "./InterfaceMob.css";

export default function InterfaceMob(props) {
  const [filterArr, setFiltredArr] = useState([]);
  const [activeFilter, setActiveFilter] = useState("apple");

  useEffect(() => {
    setFiltredArr(
      CATALOG.filter(({ isBanner }) => !isBanner)
        .filter((item) => item.tags?.includes(activeFilter))
        .filter((item, index) => index <= 7)
    );
  }, [activeFilter]);

  return (
    <div className="interface__container-s container-s">
      <div className="interface__content-s">
        <Subtitle>100% совместимость</Subtitle>
        <MainTitle>с любым интерфейсом</MainTitle>
      </div>
      <div className="interface__items-s">
        <div className="interface__sort-s">
          <FilterItem
            active={activeFilter}
            onClick={(newActiveFilter) => setActiveFilter(newActiveFilter)}
          />
          <MoreModels />
        </div>

        <Swiper
          slidesPerView={2.05}
          spaceBetween={10}
          style={{ overflow: "visible" }}
        >
          {filterArr.map((product) => (
            <SwiperSlide className="interface__item" key={product.id}>
              <CardProductMob {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="interface__slider-pointer">
        <img src={Slide} alt="Потяните вправо" />
      </div>
    </div>
  );
}
