import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../footer/footer.css";
import ScrollButton from "../scroll/scroll";
import { RiUserFollowLine } from "react-icons/ri";
import i18n from "../Languages/i18n";
import { useTranslation } from "react-i18next";


let Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
    <ScrollButton/>
    <div className="footerstart">
      <div className="footer-flex">
        <div className="information">
          <h1>{t('header.contact')}</h1>
          <p>
            <a href="https://maps.app.goo.gl/txWq2nTwBBEc9zzQ8" target="_blank">
            {t('footer.maps')}
            </a>
          </p>
          <p>
            <a href="mailto:someone@info@hrteam.az">info@hrteam.az</a>
          </p>
          <p>
            <a href="tel:+994703308607">+994 70-330-86-07</a>
          </p>
          <div className="socialmedias">
            <div className="fb">
              <p><FaFacebookF /></p>
            </div>
            <div className="insta">
              <p><FaInstagram /></p>
            </div>
            <div className="linkedin">
              <p><FaLinkedinIn /></p>
            </div>
          </div>
        </div>
        <div className="usefullinks">
          <h1>{t('footer.usefullinks')}</h1>
          <p>
            <a href="#">{t('header.about')}</a>
          </p>
          <p>
            <a href="#">{t('footer.news')}</a>
          </p>
          <p>
            <a href="#">{t('header.services')}</a>
          </p>
          <p>
            <a href="#">{t('footer.support')}</a>
          </p>
        </div>
        <div className="ourservices">
          <h1>{t('header.services')}</h1>
          <div className="services">
              <p>
                <a href="">{t('header.service1')}</a>
              </p>
              <p>
                <a href="">{t('header.service2')}</a>
              </p>
              <p>
                <a href="">{t('header.service3')}</a>
              </p>
              <p>
                <a href="">{t('header.service4')}</a>
              </p>
              <p>
                <a href="">{t('header.service5')}</a>
              </p>
              <p>
                <a href="">{t('header.service6')}</a>
              </p>
              <p>
                <a href="">{t('header.service7')}</a>
              </p>
              <p>
                <a href="">{t('header.service8')}</a>
              </p>
          </div>
        </div>
        <div className="latestupdate">
          <h1>{t('footer.latestupdate')}</h1>
          <p>{t('footer.subs')}</p>
          <form className="subscribelatest" action="#">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={t('footer.inputholder')}
              required
              autoComplete="off"
              maxLength={25}
            />
            <button id="subscribebutton" type="submit"><RiUserFollowLine />
            </button>
          </form>
        </div>
      </div>
      <hr />
      <p>
        Copyright © 2024 | Powered by{" "}
        <a href="https://www.instagram.com/ferhad.sultann" target="_blank">
          Sultanov
        </a>
      </p>
    </div>
    </>
  );
};

export default Footer;
