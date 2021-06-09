import { Link } from "react-router-dom";
import Header from "../../components/Header/header/Header";
import CardProduct from "../../components/Catalog/CardProduct/CardProduct";
import FilterTitle from "../../components/Catalog/Filter/Filter-title/Filter-title";
import "./catalog.css";
import CardSale from "../../components/Catalog/CardSale/CardSale";
import CATALOG from "../../Consts/catalog/catalog";

export const Catalog = () => {
  return (
    <div>
      <Header />
      <div className="catalog__container container">
        <div className="catalog-grid">
          <div className="catalog-grid__left-column">
            <div className="catalog__filter">
              <FilterTitle />
            </div>
            <CardSale />
          </div>

          <div className="catalog-grid__right-column">
            <div className="catalog-grid__head">
              <div className="catalog-grid__breadcrumb">
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
