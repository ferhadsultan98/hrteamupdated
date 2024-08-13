import React, { useEffect } from "react";
import "../../main/threesection/threesection.css";
import ModernOutsorcing from "../../../assets/outsorcing1.png";
import StaffOutstaffing from "../../../assets/stafoutstaffing1.png";
import DirectPlacement from "../../../assets/directplace1.webp";
import Aos from "aos";
import "aos/dist/aos.css";

let ThreeSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="wedowhats">
        <div className="wedowhat">biz nə edirik?</div>
      </div>
      <div className="Threesection">
        <h1>Fəaliyyət sahələrimiz</h1>
        <div className="ThreeSectionCards">
          <div
            className="ExpertiseCards"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="OneCardHeader">
              <p>Təcrübə</p>
            </div>
            <div className="OneCardMain">
              <img src={ModernOutsorcing} alt="" />
            </div>
            <div className="OneCardFooter">
              <h3>Müasir autsorsinq</h3>
              <p>
                Müasir autsorsinq təcrübələri uzunmüddətli dəyər yaratmağa
                yönəlmiş strateji tərəfdaşlıqlara diqqət yetirir.
              </p>
            </div>
          </div>
          <div
            className="ExpertiseCards"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="OneCardHeader">
              <p>Təcrübə</p>
            </div>
            <div className="OneCardMain">
              <img src={StaffOutstaffing} alt="" />
            </div>
            <div className="OneCardFooter">
              <h3>Kadrların kənarlaşdırılması</h3>
              <p>
                Autstaffinq başqa bir şirkətə məxsus işçi heyətindən istifadə
                etmək və ya ştatdan kənar işçiləri işə götürmək qabiliyyətidir.
              </p>
            </div>
          </div>
          <div
            className="ExpertiseCards"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="OneCardHeader">
              <p>Təcrübə</p>
            </div>
            <div className="OneCardMain">
              <img src={DirectPlacement} alt="" />
            </div>
            <div className="OneCardFooter">
              <h3>Birbaşa yerləşdirmə</h3>
              <p>
                Birbaşa yerləşdirmə, şirkətin üçüncü tərəfin işə götürmə
                agentliyi və ya kadr firmasını cəlb etmədən işçini birbaşa işə
                götürdüyü işə qəbul üsuludur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeSection;
