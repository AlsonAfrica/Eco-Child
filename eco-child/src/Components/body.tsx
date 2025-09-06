import React, { useState, useEffect } from 'react';
import '../Styles/body.css';

// Simple FloatingFlower component placeholder
const FloatingFlower: React.FC<{
  delay: number;
  size: number;
  left: string;
  top: string;
}> = ({ delay, size, left, top }) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      width: size,
      height: size,
      animation: `floatFlower 8s ease-in-out ${delay}s infinite`,
      pointerEvents: 'none',
      zIndex: 1,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="16" fill="#FFB6C1" opacity="0.8" />
      <circle cx="20" cy="20" r="8" fill="#FFF" opacity="0.7" />
    </svg>
  </div>
);

interface SlideCard {
  title: string;
  backgroundImage: string;
}

const Body: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: SlideCard[] = [
    {
      title: 'Smart Bins',
      backgroundImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Electrical Waste Chutes',
      backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'IoT Devices',
      backgroundImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Community Engagement',
      backgroundImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="urban-environment-container">
      {/* Animated floating flowers */}
      <FloatingFlower delay={0} size={30} left="5%" top="10%" />
      <FloatingFlower delay={2} size={25} left="90%" top="15%" />
      <FloatingFlower delay={4} size={35} left="15%" top="80%" />
      <FloatingFlower delay={6} size={20} left="85%" top="75%" />
      <FloatingFlower delay={1} size={28} left="70%" top="5%" />
      <FloatingFlower delay={3} size={32} left="25%" top="25%" />
      <FloatingFlower delay={5} size={22} left="60%" top="90%" />
      <FloatingFlower delay={7} size={26} left="40%" top="70%" />
      
      <div className="content-column">
        <div className="text-content">
          <h1 className="heading">Urban Environment</h1>
          <p className="description">
            Urban Environment is a pioneering company dedicated to revolutionizing waste management 
            and promoting sustainability in urban environments. We design, develop and implement 
            innovative solutions to reduce waste, generate clean energy and create cleaner future 
            for communities.
          </p>
        </div>
      </div>
      
      <div className="slideshow-column">
        <div className="slideshow-container">
          <div className="slide-wrapper">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.backgroundImage})`
                }}
              >
                <div className="slide-content">
                  <h2 className="slide-title">{slide.title}</h2>
                </div>
              </div>
            ))}
          </div>
          
          <button className="nav-button prev" onClick={prevSlide} aria-label="Previous slide">
            &#8249;
          </button>
          <button className="nav-button next" onClick={nextSlide} aria-label="Next slide">
            &#8250;
          </button>
          
          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;