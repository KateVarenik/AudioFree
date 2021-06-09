import "./Filter-fieldset.css";

const filterArr = [
  {
    id: 1,
    title: "Бренд:",
    position: [
      "Samsung",
      "Huawei",
      "Meizu",
      "Philips",
      "Apple AirPods",
      "Sony",
      "AfterShokz",
      "Beats Solo",
    ],
  },
  {
    id: 2,
    title: "Категория:",
    position: [
      "Наушники-вкладыши",
      "Наушники Bluetooth",
      "Полноразмерные",
      "Наушники накладные",
      "Спортивные наушники",
      "С Bluetooth с MP3",
      "Наушники для детей",
      "Наушники - Плеер 13",
      "Гарнитура",
    ],
  },
  {
    id: 3,
    title: "Цена:",
  },
  {
    id: 4,
    title: "По акции:",
    position: ["Со скидкой", "По Акции", "Распродажа"],
  },
];

export default function FilterFieldset() {
  return <div className="filter-fieldset"></div>;
}
