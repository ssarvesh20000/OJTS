import React from 'react';
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
  const images = [
    { id: 1, src: supra, make: 'Toyota', model: 'GR Supra', f_tint: '20%', b_tint: '20%' },
    { id: 2, src: rolly, make: 'Rolls Royce', model: 'Ghost', f_tint: '20%', b_tint: '5%' },
    { id: 3, src: amg, make: 'Mercedes Benz', model: 'AMG GTR', f_tint: '15%', b_tint: '15%' },
    { id: 4, src: ferrari, make: 'Ferrari', model: 'F8 Tributo', f_tint: '??', b_tint: '??' },
    { id: 5, src: tesla, make: 'Tesla', model: 'Model 3', f_tint: '20%', b_tint: '5%' },
  ];

  // Duplicate the image array to make the looping seamless
  const duplicatedImages = [...images, ...images];

  return (
    <section id="small-gallery" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Gallery</h2>
      <p>Here are a few examples of our recent work.</p>
      <div style={galleryStyle}>
        <div style={sliderStyle}>
          {duplicatedImages.map((image, index) => (
            <div 
              key={index} 
              style={imageContainerStyle} 
              onMouseEnter={() => handleMouseEnter(image.id)} 
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image.src}
                alt={image.model}
                style={imageStyle}
              />
              {hoveredImageId === image.id && (
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
          View Full Gallery
        </button>
      </Link>
    </section>
  );
}

const galleryStyle = {
  overflow: 'hidden', // Hide overflow for sliding effect
  width: '100%',
};

const sliderStyle = {
  display: 'flex',
  animation: 'slide 20s linear infinite', // Slide animation with infinite loop
};

const imageContainerStyle = {
  minWidth: '25%', // Adjust to fit 5 images on screen
  position: 'relative',
  margin: '1%',
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

// CSS keyframes for seamless sliding animation
const styles = `
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-135%); /* Move by 50% since we duplicated the images */
  }
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${styles}</style>`);

export default SmallGallery;
