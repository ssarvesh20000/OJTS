import React from 'react';
import { Link } from 'react-router-dom';
import { useHover } from './HoverHandler';
import HoverDetails from './HoverDetails';
import lebron from '../assets/lebron.png';

function SmallGallery() {
  const { hoveredImageId, handleMouseEnter, handleMouseLeave } = useHover();
  const images = [
    { id: 1, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 2, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 3, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 4, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 5, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 6, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 7, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 8, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    { id: 9, src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    // Add more photos as needed
  ];

  return (
    <section id="small-gallery" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Gallery</h2>
      <p>Here are a few examples of our recent work.</p>
      <div style={galleryStyle}>
        {images.map((image) => (
          <div 
            key={image.id} 
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

      <Link to="/gallery">
        <button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          View Full Gallery
        </button>
      </Link>
    </section>
  );
}

const galleryStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const imageContainerStyle = {
  position: 'relative',
  width: '30%',
  margin: '10px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
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

export default SmallGallery;
