import React, { useState, useEffect, useRef } from 'react';
import './onesection.css'; 

const images = [
  "https://www.cityoflacrosse.org/home/showpublishedimage/6477/638330639496800000",
  "https://emeritus.org/wp-content/uploads/2023/04/a2-1.png",
  "https://yourhumanresourcesolution.com/wp-content/uploads/2021/08/Human-Resources-Solution-Workforce-Management-WFM-Photo-Large-Orlando-Winter-Park-Maitland-College-Park-Windermere-Dr-Phillips-Winter-Garden-Ocoee-Slider.jpg",
  "https://www.wise-systems.net/wp-content/uploads/2016/08/slider1.jpg"
];

const Slider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const intervalRef = useRef(null);

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

  return (
    <div className="sliderbodys">
      <div className="slider-container">
        <div className="image-container">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className={`slide-image ${index === imageIndex ? 'image-active' : ''}`}
            />
          ))}
        </div>
        <button className="nav-arrow prev-arrow" onClick={handlePrevClick}>&#10094;</button>
        <button className="nav-arrow next-arrow" onClick={handleNextClick}>&#10095;</button>
      </div>
    </div>
  );
};

export default Slider;
