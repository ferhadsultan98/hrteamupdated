import React, { useState, useEffect, useRef } from 'react';
import './onesection.css'; 
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const images = [
  {
    src: "https://www.cityoflacrosse.org/home/showpublishedimage/6477/638330639496800000",
    alt: "Slide 1",
    text: "Bu birinci slide'ın metni."
  },
  {
    src: "https://emeritus.org/wp-content/uploads/2023/04/a2-1.png",
    alt: "Slide 2",
    text: "Bu ikinci slide'ın metni."
  },
  {
    src: "https://yourhumanresourcesolution.com/wp-content/uploads/2021/08/Human-Resources-Solution-Workforce-Management-WFM-Photo-Large-Orlando-Winter-Park-Maitland-College-Park-Windermere-Dr-Phillips-Winter-Garden-Ocoee-Slider.jpg",
    alt: "Slide 3",
    text: "Bu üçüncü slide'ın metni."
  }
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const nextImage = () => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    };

    intervalRef.current = setInterval(nextImage, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrevClick = () => {
    setImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    resetInterval();
  };

  const handleNextClick = () => {
    setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const handleMouseEnter = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.add('visible'));
  };

  const handleMouseLeave = () => {
    const arrows = sliderRef.current.querySelectorAll('.nav-arrow');
    arrows.forEach(arrow => arrow.classList.remove('visible'));
  };

  return (
    <div className="sliderbodys" ref={sliderRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="slider-container">
        <div className="image-container">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === imageIndex ? 'slide-active' : ''}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="slide-image"
              />
              <div className="slide-text">{slide.text}</div>
            </div>
          ))}
        </div>
        <button className="nav-arrow prev-arrow" onClick={handlePrevClick}><MdArrowBackIos /></button>
        <button className="nav-arrow next-arrow" onClick={handleNextClick}><MdArrowForwardIos /></button>
      </div>
    </div>
  );
};

export default Slider;
