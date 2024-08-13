import React, { useEffect } from "react";
import "./twosection.css";
import aboutVector from "../../../assets/about image.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css'

let AboutTwoSection = () => {
  useEffect(() => {
    Aos.init();
     }, [])
  return (
    <div className="containerss">
      <h1>Haqqımızda</h1>
    <div className="aboutContainer">
      <div className="aboutVector" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <img src={aboutVector} alt="about_vector" />
      </div>
      <div className="aboutinfo" data-aos="fade-left">
        <h2>
          HR Team şirkəti Azərbaycanda Biznes Proseslərinin Autsorsinqi üzrə ən
          öndə gələn müəssisələrdən biridir. Müəssisəmiz 2022-ci ildən bəri
          uğurla fəaliyyət göstərməkdədir.
        </h2>
        <h3>Bizim xidmətlərimiz aşağıdakılardır:</h3>
        <ul>
          <li><i>İnsan Resurslarının Autsorsinqi</i></li>
          <li><i>İşə qəbul Autsorsinqi</i></li>
          <li><i>Autstaffinq və İşçi qüvvəsi təchizatı</i></li>
          <li><i>Satınalma Autsorsinqi</i></li>
          <li><i>Əmək haqqının hesablanması Autsorsinqi</i></li>
          <li><i>Mühasibatlıq Autsorsinqi</i></li>
          <li><i>İmmiqrasiya və Səyahət Autsorsinqi</i></li>
          <li><i>Təlim və qiymətləndirmə</i></li>
          <li><i>Hüquq məsləhətləri</i></li>
        </ul>
        <h2>Niyə biz?</h2>
        <p>
          Siz HR team şirkətini seçməklə rahatlıqla öz biznesinizin inkişafı
          haqqında düşünə bilərsiniz, əlavə olaraq bununla siz yüksək məvacibli
          işçi heyətindən, ofis xərclərindən və digər məsrəflərdən azad
          olursunuz. Şirkətimiz sizin güvəninizə və etibarınıza arxalanaraq
          biznesinizin inkişafı üçün yüksək ixtisaslı komandası ilə xidmət
          göstərməyi özünə başlıca missiya seçmişdir.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutTwoSection;
