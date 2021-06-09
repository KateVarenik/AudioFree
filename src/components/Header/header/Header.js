import HeaderBody from "../headerBody/HeaderBody";
import HeaderInfo from "../headerInfo/HeaderInfo";
import HeaderNav from "../headerNav/HeaderNav";

export default function Header() {
  return (
    <header className="header">
      <HeaderInfo />
      <HeaderBody />
      <HeaderNav />
    </header>
  );
}
