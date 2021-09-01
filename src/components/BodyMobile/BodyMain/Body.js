import ConsultMob from "../Consult/Consult";
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
      <ConsultMob />
    </>
  );
}
