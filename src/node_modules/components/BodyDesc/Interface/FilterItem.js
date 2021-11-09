import { isMobile } from "react-device-detect";
import AppleIcon from "../../Icons/AppleIcon/AppleIcon";
import SamsungIcon from "../../Icons/SamsungIcon/SamsungIcon";
import XiaomiIcon from "../../Icons/XiaomiIcon";
import HuaweiIcon from "../../Icons/HuaweiIcon";
import SaleIcon from "../../Icons/SaleIcon";
import "./FilterItem.css";

const filterList = [
  {
    icon: <AppleIcon className="gray__apple" />,
    title: "Для iphone",
    key: "apple",
  },
  { icon: <SamsungIcon />, title: "Для Samsung", key: "samsung" },
  { icon: <XiaomiIcon />, title: "Для Xiaomi", key: "xiaomi" },
  { icon: <HuaweiIcon />, title: "Для Huawei", key: "huawei" },
  { icon: <SaleIcon />, title: "Со скидкой", key: "sale" },
];

export default function FilterItem({ active, onClick }) {
  return (
    <>
      {filterList.map(({ icon, title, key }) => (
        <div
          key={key}
          className={`sorting-item ${active === key && "active"} ${
            isMobile && "sorting-item-s"
          }`}
          onClick={() => onClick(key)}
        >
          {icon}
          <span className="sorting-item__title">{title}</span>
        </div>
      ))}
    </>
  );
}
