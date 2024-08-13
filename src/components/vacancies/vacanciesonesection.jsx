import React from "react";
import "../vacancies/vacancies.css";
import VacanciesBackImage from "../../assets/vacanciess.jpg";
import { Link } from "react-router-dom";

let VacanciesOneSection = () => {
  return (
    <div className="VacanciesBackImage">
      <img src={VacanciesBackImage} alt="VacanciesBackImage" />
      <div className="content">
        <Link to="/"><h3>Əsas səhifə /</h3></Link>
        <h3>  Vakansiyalar</h3>
      </div>
    </div>
  );
};

export default VacanciesOneSection;
