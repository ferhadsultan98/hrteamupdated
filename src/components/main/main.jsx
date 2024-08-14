import React from "react";
import "../main/main.css"
import TwoSection from "./twosection/twosection";
import ThreeSection from "./threesection/threesection";
import Slider from "./onesection/onesection";
import Foursection from "./forusection/foursection";
import Fivesection from "./fivesection/Fivesection";
import Sixsection from "./sixsection/Sixsection";
import Sevensection from "./sevensection/Sevensection";
import Eightsection from "./eightsection/Eightsection";

let Main = () => {
  return (
    <>
      <Slider/>
      <TwoSection />
      <ThreeSection />
      <Foursection/>
      <Fivesection/>
      <Sixsection/>
      <Sevensection/>
      <Eightsection/>
    </>
  );
};

export default Main;
