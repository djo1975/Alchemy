import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));

  return (
    <div className="slideshow-container">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentSlide ? 'slide active' : 'slide'}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>

      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slideshow;
