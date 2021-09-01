// import Faq from "../FAQ/FAQ";
// import Interface from "../Interface/Interface";
// import Test from "../Test/Test";
// import Top from "../Top/Top";
// import Odds from "../Odds/Odds";
// import Consult from "../Consult/Consult";
import FaqMob from "../FAQ/FAQ";
import InterfaceMob from "../Interface/InterfaceMob";
import OddsMob from "../Odds/Odds";
import SliderBestsellerMob from "../SliderBestseller/Slider";
import TestMob from "../Test/Test";
import TopMob from "../Top/Top";

export default function BodyMobile() {
  return (
    <>
      <SliderBestsellerMob />
      <InterfaceMob />
      <TestMob />
      <TopMob />
      <FaqMob />
      <OddsMob />
      {/* 
      <Odds />
      <Consult /> */}
    </>
  );
}
