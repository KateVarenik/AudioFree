import MainTitle from "../../General/Title/MainTitle";
import Subtitle from "../../General/Title/Subtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import CATALOG from "../../../Consts/catalog/catalog";
import "./Top.css";
import CardProductMob from "../../Catalog/CardProduct/CardProductMob";
import SlideIcon from "../../Icons/Slide/SlideIcon";

export default function TopMob() {
  return (
    <div className="top-s">
      <div className="top__container-s container-s">
        <div className="top__content-s">
          <Subtitle className="top__subtitle-bold">ТОП-2021</Subtitle>
          <MainTitle>лидеры предзаказов, обзоров и рекомендаций</MainTitle>
        </div>

        <Swiper
          slidesPerView={2.05}
          spaceBetween={10}
          style={{ overflow: "visible" }}
          className="tob__slider"
        >
          {CATALOG.filter(({ isBanner }) => !isBanner)
            .filter((item) => item.rate > 4)
            .filter((item, index) => index <= 8)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <CardProductMob {...product} />
              </SwiperSlide>
            ))}
        </Swiper>

        <SlideIcon />
      </div>
    </div>
  );
}
