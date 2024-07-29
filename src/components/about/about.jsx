import React from "react";
import "../about/about.css";
import AboutOneSection from "./onesection/aboutonesection";
import AboutTwoSection from "./twosection/abouttwosection";
import ThreeSection from "./threesection/threesection";


let About = () => {
  return (
    <>
      <AboutOneSection />
      <AboutTwoSection/>
      <ThreeSection/>
    </>
  );
};

export default About;
