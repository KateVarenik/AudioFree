import { Link } from "react-router-dom";
import Breadcrumb from "../../../../components/General/Breadcrumb/Breadcrumb";
import PageTitle from "../../../../components/General/Title/PageTitle";
import Flex from "../../../../components/General/Flex/Flex";
import ArrowLeft from "../../../../components/Icons/Arrow/ArrowLeft";
import FilterTitle from "../Filter-title/Filter-title";
import "./CatalogMob.css";
import CATALOG from "../../../../Consts/catalog/catalog";
import CardProductMob from "../../../../components/Catalog/CardProduct/CardProductMob";

export default function CatalogMob() {
  return (
    <>
      <div className="catalog-mob__container container-s">
        <Flex>
          <ArrowLeft style={{ paddingLeft: "10px", paddingRight: "17px" }} />
          <Breadcrumb>
            <Link to="/">Главная</Link>
            &nbsp; / &nbsp;
            <Link to="/catalog">Каталог</Link>
          </Breadcrumb>
        </Flex>

        <PageTitle style={{ padding: "18px 10px" }}>Каталог</PageTitle>
        <FilterTitle className="catalog-mob__filter" />

        <div className="catalog-mob__items">
          {CATALOG.filter(({ isBanner }) => !isBanner)
            .filter((item, index) => index <= 16)
            .map((product) => (
              <div key={product.id}>
                <CardProductMob {...product} />
              </div>
            ))}
        </div>
        <button className="catalog-mob__btn-more">Еще</button>
      </div>
    </>
  );
}
