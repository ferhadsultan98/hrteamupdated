import React from "react";
import "./onesection.css";
import AboutBackImage from "../../../assets/hrabouts.jpg";
import { Link } from "react-router-dom";

let AboutOneSection = () => {
  return (
    <div className="AboutBackImage">
      <img src={AboutBackImage} alt="" />
      <div className="AboutContent">
        <Link to='/'><h3>Əsas səhifə /</h3></Link>
        <h3>Haqqımızda</h3>
      </div>
    </div>
  );
};

export default AboutOneSection;
