import React, { useState, useEffect } from "react";
import LogoImg from "../../assets/hrteamlogo.png";
import "../header/header.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import i18n from "../Languages/i18n";
import Flag from 'react-world-flags';
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [scrollProgress, setScrollProgress] = useState(0); 
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false); 
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const totalDocScroll = docHeight - winHeight;
    const scrollPercent = (scrollTop / totalDocScroll) * 100;
    setScrollProgress(scrollPercent);

    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageMenuOpen(false);
  };

  const handleSearchClick = () => {
    setSearchVisible(true);
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      {/* Progress Bar */}
      <div className="topheader">
        <div className="contactsu">
          <div className="phone">
            <h3>
              <a href="tel:+994703308607">
                <IoCall /> +994 70-330-86-07
              </a>
            </h3>
          </div>
          <div className="mails">
            <h3>
              <a href="mailto:info@hrteam.az">
                <MdEmail /> info@hrteam.az
              </a>
            </h3>
          </div>
        </div>
        <div className="socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="BottomHeader">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        <div className="LogoSide">
          <a href="/"><img src={LogoImg} alt="Logo" /></a>
        </div>
        
        <ul className={`Navbar ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/">{t('header.homepage')}</a>
          </li>
          <li>
            <a href="about">{t('header.about')}</a>
          </li>
          <li className="dropdown">
            <a href="/">
              {t('header.services')}
            </a>
            <ul className="dropdown-menu">
              <li><a href="/services/oneservice">{t('header.service1')}</a></li>
              <li><a href="/services/twoservice">{t('header.service2')}</a></li>
              <li><a href="/services/threeservice">{t('header.service3')}</a></li>
              <li><a href="/services/fourservice">{t('header.service4')}</a></li>
              <li><a href="/services/fiveservice">{t('header.service5')}</a></li>
              <li><a href="/services/sixservice">{t('header.service6')}</a></li>
              <li><a href="/services/sevenservice">{t('header.service7')}</a></li>
              <li><a href="/services/eightservice">{t('header.service8')}</a></li>
            </ul>
          </li>
          <li>
            <a href="vacancies">{t('header.vacancies')}</a>
          </li>
          <li>
            <a href="contact">{t('header.contact')}</a>
          </li>
        </ul>

        <button className="button type1">
          <span className="btn-txt">{t('header.startbtn')}</span>
        </button>

        <div className="HamburgerAndLanguage">
          <div className="language-menu">
            <button onClick={toggleLanguageMenu}>
              {i18n.language === 'en' ? 'EN' : i18n.language === 'ru' ? 'RU' : 'AZ'}
            </button>
            {languageMenuOpen && (
              <ul className="language-dropdown">
                <li onClick={() => changeLanguage('az')}><Flag code="AZ" />AZ</li>
                <li onClick={() => changeLanguage('en')}><Flag code="GB" />EN</li>
                <li onClick={() => changeLanguage('ru')}><Flag code="RU" />RU</li>
              </ul>
            )}
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />} 
          </div>
          <button className="search-icon" onClick={handleSearchClick}><b><CiSearch /></b></button>
        </div>
      </div>

      {isSearchVisible && (
        <div className="search-overlay">
          <div className="search-container">
            <button className="close-button" onClick={handleCloseSearch}><b><IoIosClose /></b></button>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
