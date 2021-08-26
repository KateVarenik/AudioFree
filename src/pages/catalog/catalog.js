import { Link } from "react-router-dom";
import HeaderInfo from "../../components/Header/headerInfo/HeaderInfo";
import HeaderBody from "../../components/Header/headerBody/HeaderBody";
import HeaderNav from "../../components/Header/headerNav/HeaderNav";
import CardProduct from "../../components/Catalog/CardProduct/CardProduct";
import FilterTitle from "./components/Filter-title/Filter-title";
import "./catalog.css";
import CardSale from "../../components/Catalog/CardSale/CardSale";
import CATALOG from "../../Consts/catalog/catalog";
import Checkbox from "./components/Checkbox/Checkbox";
import SliderRange from "./components/Slider/SliderRange";
import WhitePurpleButton from "../../components/Buttons/WhitePurpleButton";
import CardWrapper from "../../components/Catalog/CardWrapper";

export const Catalog = () => {
  return (
    <div>
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
      <div className="catalog__container container-l">
        <div className="catalog-grid">
          <div className="catalog-grid__left-column">
            <CardWrapper className="catalog__filter">
              <form>
                <FilterTitle className="catalog__filter-title" />
                <hr />
                <div className="catalog__filter-block">
                  <h4 className="catalog__filter-subtitle">Бренд:</h4>
                  <ul>
                    <Checkbox defaultChecked>Samsung</Checkbox>
                    <Checkbox>Huawei</Checkbox>
                    <Checkbox>Meizu</Checkbox>
                    <Checkbox>Philips</Checkbox>
                    <Checkbox>Apple AirPods</Checkbox>
                    <Checkbox>Sony</Checkbox>
                    <Checkbox>AfterShokz</Checkbox>
                    <Checkbox>Beats Solo</Checkbox>
                  </ul>
                </div>
                <hr />
                <div className="catalog__filter-block">
                  <h4 className="catalog__filter-subtitle">Категория:</h4>
                  <ul>
                    <Checkbox defaultChecked>Наушники-вкладыши</Checkbox>
                    <Checkbox>Наушники Bluetooth</Checkbox>
                    <Checkbox>Полноразмерные</Checkbox>
                    <Checkbox>Наушники накладные</Checkbox>
                    <Checkbox>Спортивные наушники</Checkbox>
                    <Checkbox>С Bluetooth с MP3</Checkbox>
                    <Checkbox>Наушники для детей</Checkbox>
                    <Checkbox>Наушники - Плеер 13</Checkbox>
                    <Checkbox>Гарнитура</Checkbox>
                  </ul>
                </div>
                <hr />
                <div className="catalog__filter-block">
                  <h4 className="catalog__filter-subtitle">Цена, ₽</h4>
                  <div className="catalog__filter-price">
                    <SliderRange />
                  </div>
                </div>
                <hr />
                <div className="catalog__filter-block">
                  <h4 className="catalog__filter-subtitle">По акции:</h4>
                  <ul>
                    <Checkbox defaultChecked>Со скидкой</Checkbox>
                    <Checkbox>По Акции</Checkbox>
                    <Checkbox>Распродажа</Checkbox>
                  </ul>
                </div>
                <div className="catalog__btn-block">
                  <WhitePurpleButton
                    type="reset"
                    className="catalog__btn-reset"
                  >
                    Очистить фильтр
                  </WhitePurpleButton>
                </div>
              </form>
            </CardWrapper>
            <CardSale />
          </div>

          <div className="catalog-grid__right-column">
            <div className="catalog-grid__head">
              <div className="catalog-grid__breadcrumb breadcrumb">
                <Link to="/">Главная</Link>
                &nbsp; / &nbsp;
                <Link to="/catalog">Каталог</Link>
                <div className="catalog-grid__header-group">
                  <h1 className="catalog-grid__header-title">Каталог</h1>
                  <div className="catalog-grid__header-select">
                    <select name="catalog-sort" id="">
                      <option value="popular">По популярности</option>
                      <option value="new">По новизне</option>
                      <option value="cheap">Сначала дешевые</option>
                      <option value="expensive">Сначала дорогие</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {CATALOG.map((product) => {
              if (product.isBanner) {
                return <CardSale key={product.id} />;
              }
              return (
                <div className="interface__item" key={product.id}>
                  <CardProduct {...product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
