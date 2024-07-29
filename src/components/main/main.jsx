import React from "react";
import "../main/main.css"
import TwoSection from "./twosection/twosection";
import ThreeSection from "./threesection/threesection";
import Slider from "./onesection/onesection";

let Main = () => {
  return (
    <>
      <Slider/>
      <TwoSection />
      <ThreeSection />
    </>
  );
};

export default Main;
