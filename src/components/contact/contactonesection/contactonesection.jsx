import React from "react";
import "../contactonesection/contactonesection.css";
import ContactBackImage from "../../../assets/contactback.jpg";
import { Link } from "react-router-dom";

let ContactOneSection = () => {
  return (
    <div className="ContactBackImage">
      <img src={ContactBackImage} alt="" />
      <div className="content">
         <Link to='/' title=""> <h3>Əsas səhifə / </h3></Link>
        <h3> Əlaqə</h3>
      </div>
    </div>
  );
};

export default ContactOneSection;
