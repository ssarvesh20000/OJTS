import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHover } from './HoverHandler';
import HoverDetails from './HoverDetails';
import supra from '../assets/1supra.png';
import rolly from '../assets/2rolly.png';
import amg from '../assets/3amg.png';
import ferrari from '../assets/4ferrari.png';
import tesla from '../assets/5tesla.png';

function SmallGallery() {
  const { hoveredImageId, handleMouseEnter, handleMouseLeave } = useHover();
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [
    { id: 1, src: supra, make: 'Toyota', model: 'GR Supra', f_tint: '20%', b_tint: '20%' },
    { id: 2, src: rolly, make: 'Rolls Royce', model: 'Ghost', f_tint: '20%', b_tint: '5%' },
    { id: 4, src: ferrari, make: 'Ferrari', model: 'F8 Tributo', f_tint: '15%', b_tint: '15%' },
    { id: 3, src: amg, make: 'Mercedes Benz', model: 'AMG GTR', f_tint: '15%', b_tint: '15%' },
    { id: 5, src: tesla, make: 'Tesla', model: 'Model 3', f_tint: '20%', b_tint: '5%' },
  ];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSliderMouseEnter = () => setIsPaused(true);
  const handleSliderMouseLeave = () => setIsPaused(false);

  // Function to temporarily pause scrolling on mobile when clicked
  const handleClickPause = () => {
    if (isMobile) {
      setIsPaused(true); // Temporarily pause scrolling
      setTimeout(() => setIsPaused(false), 500); // Resume scrolling after 500ms
    }
  };

  return (
    <section id="small-gallery" style={sectionStyle}>
      <h2>Gallery</h2>
      <p style={{ fontFamily: 'Merriweather, serif', fontSize: '14px', color: '#ddd' }}>
      Here are a few examples of our recent work.
      </p>
      <div 
        style={isMobile ? mobileGalleryStyle : galleryStyle}
        onMouseEnter={handleSliderMouseEnter} 
        onMouseLeave={handleSliderMouseLeave}
        onClick={handleClickPause} // Temporarily pause on click for mobile
      >
        <div 
          style={{ 
            ...sliderStyle, 
            flexDirection: isMobile ? 'column' : 'row', 
            animationPlayState: isPaused ? 'paused' : 'running', 
            animation: isMobile ? 'slideVertical 30s linear infinite' : 'slideHorizontal 30s linear infinite',
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              style={isMobile ? mobileImageContainerStyle : imageContainerStyle} 
              onMouseEnter={isMobile ? null : () => handleMouseEnter(image.id)} 
              onMouseLeave={isMobile ? null : handleMouseLeave}
            >
              <img
                src={image.src}
                alt={image.model}
                style={imageStyle}
              />
              {hoveredImageId === image.id && !isMobile && (
                <div style={overlayStyle}>
                  <HoverDetails
                    image={image.src}
                    make={image.make}
                    model={image.model}
                    f_tint={image.f_tint}
                    b_tint={image.b_tint}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Link to="/gallery">
        <button style={buttonStyle}>
          View More
        </button>
      </Link>
      <div style={{ height: '40px' }}></div> {/* This adds the empty space */}
    </section>
  );
}

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '20px',
  scrollMarginTop: '100px',
};

const galleryStyle = {
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
};

const mobileGalleryStyle = {
  overflow: 'hidden',
  width: '100%',
  height: '600px', // Increase height to show more images in mobile mode
  display: 'block',
};

const sliderStyle = {
  display: 'flex',
};

const imageContainerStyle = {
  minWidth: '48%',
  position: 'relative',
  margin: '1%',
};

const mobileImageContainerStyle = {
  width: '100%',
  marginBottom: '20px',
  position: 'relative',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '8px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const styles = `
@keyframes slideHorizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-250%);
  }
}

@keyframes slideVertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default SmallGallery;
