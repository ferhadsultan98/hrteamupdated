import React, { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Services from './components/services/services';
import About from './components/about/about';
import Vacancies from './components/vacancies/vacancies';
import Contact from './components/contact/contact';
import OneService from './components/services/serviceslist/oneservice';
import TwoService from './components/services/serviceslist/twoservice';
import ThreeService from './components/services/serviceslist/threeservice';
import FourService from './components/services/serviceslist/fourservice';
import FiveService from './components/services/serviceslist/fiveservice';
import SixService from './components/services/serviceslist/sixservice';
import SevenService from './components/services/serviceslist/sevenservice';
import EightService from './components/services/serviceslist/eightservice';
import NotFound from './components/notfound404/notfound';
import Loader from './components/loader/loader'; 

function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Main /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/services" element={<Layout><Services /></Layout>} />
            <Route path="/vacancies" element={<Layout><Vacancies /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/services/oneservice" element={<Layout><OneService /></Layout>} />
            <Route path="/services/twoservice" element={<Layout><TwoService /></Layout>} />
            <Route path="/services/threeservice" element={<Layout><ThreeService /></Layout>} />
            <Route path="/services/fourservice" element={<Layout><FourService /></Layout>} />
            <Route path="/services/fiveservice" element={<Layout><FiveService /></Layout>} />
            <Route path="/services/sixservice" element={<Layout><SixService /></Layout>} />
            <Route path="/services/sevenservice" element={<Layout><SevenService /></Layout>} />
            <Route path="/services/eightservice" element={<Layout><EightService /></Layout>} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
