import React,{useEffect} from "react";
import "../vacancies/vacancies.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

let VacanciesTwoSection = () => {
  useEffect(() => {
    Aos.init();
     }, [])
  return (
    <div className="bbody">
  <div className="header">
    <h1>İş İlanları - Şirket Adı</h1>
  </div>
  <div className="container">
    <div className="job-listing">
      <img src="image1.jpg" alt="Pozisyon Resmi" className="job-image" />
      <h3>Pozisyon Adı 1</h3>
      <p>Açıklama: Bu pozisyonla ilgili kısa açıklama buraya yazılır.</p>
      <ul>
        <li>
          Gerekli Nitelikler:
          <ul>
            <li>Nitelik 1</li>
            <li>Nitelik 2</li>
            <li>Nitelik 3</li>
          </ul>
        </li>
      </ul>
      <a href="mailto:ornek@ornek.com" className="apply-link">
        Başvuru için e-posta gönderin
      </a>
    </div>
    <div className="job-listing">
      <img src="image2.jpg" alt="Pozisyon Resmi" className="job-image" />
      <h3>Pozisyon Adı 2</h3>
      <p>Açıklama: Bu pozisyonla ilgili kısa açıklama buraya yazılır.</p>
      <ul>
        <li>
          Gerekli Nitelikler:
          <ul>
            <li>Nitelik 1</li>
            <li>Nitelik 2</li>
            <li>Nitelik 3</li>
          </ul>
        </li>
      </ul>
      <a href="mailto:ornek@ornek.com" className="apply-link">
        Başvuru için e-posta gönderin
      </a>
    </div>
  </div>
  </div>

  );
};

export default VacanciesTwoSection;
