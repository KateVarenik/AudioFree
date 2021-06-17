import Faq from "../FAQ/FAQ";
import Interface from "../Interface/Interface";
import SliderBestseller from "../SliderBestseller/Slider";
import Test from "../Test/Test";
import Top from "../Top/Top";
import Odds from "../Odds/Odds";

export default function Body() {
  return (
    <>
      <SliderBestseller />
      <Interface />
      <Test />
      <Top />
      <Faq />
      <Odds />
    </>
  );
}
