import React, { useEffect } from "react";
import "../vacancies/vacancies.css";
import VacanciesOneSection from "./vacanciesonesection";
import VacanciesTwoSection from "./vacanciestwosection";



let Vacancies = () =>{
    return (
        <>
        <VacanciesOneSection/>
        <VacanciesTwoSection/>
        </>
    )
}

export default Vacancies