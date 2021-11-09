import Faq from "../FAQ/FAQ";
import SliderBestsellerDesc from "../SliderBestseller/Slider";
import Test from "../Test/Test";
import Top from "../Top/Top";
import Odds from "../Odds/Odds";
import Consult from "../Consult/Consult";
import InterfaceDesk from "../Interface/Interface";

export default function BodyDesk() {
  return (
    <>
      <SliderBestsellerDesc />
      <InterfaceDesk />
      <Test />
      <Top />
      <Faq />
      <Odds />
      <Consult />
    </>
  );
}
