import Photo1 from "../../../img/imageMainSlider.png";
import Photo2 from "../../../img/imageMainSlider2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.min.css";
import "./Slider.css";
import SliderButton from "../../Buttons/SliderButton";

SwiperCore.use([Autoplay, Pagination]);

export default function SliderBestseller() {
  return (
    <div className="slider">
      <Swiper
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        className="slider__sliderbox"
      >
        <SwiperSlide>
          <div className="slider__decoration">
            <div className="slider__decoration-text">
              <p className="slider__label">ваш выбор</p>
              <p className="slider__productname">Hoco W22</p>
            </div>
            <SliderButton>Купить</SliderButton>
          </div>

          <div className="slider__photo">
            <img src={Photo1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__decoration">
            <div className="slider__decoration-text">
              <p className="slider__label">ваш выбор</p>
              <p className="slider__productname">Hoco W22</p>
            </div>
            <button className="slider__button">Купить</button>
          </div>
          <div className="slider__photo">
            <img src={Photo2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__decoration">
            <div className="slider__decoration-text">
              <p className="slider__label">ваш выбор</p>
              <p className="slider__productname">Hoco W22</p>
            </div>
            <button className="slider__button">Купить</button>
          </div>
          <div className="slider__photo">
            <img src={Photo1} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
