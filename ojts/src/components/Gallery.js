import React from 'react';

function Gallery() {
  return (
    <section style={{ padding: '20px' }}>
      <h2>Main Gallery</h2>
      <p>Explore thousands of our tinting projects.</p>
      <div style={galleryStyle}>
        {/* Render many photos */}
        <img src="photo1.jpg" alt="Tinted Car 1" style={imageStyle} />
        <img src="photo2.jpg" alt="Tinted Car 2" style={imageStyle} />
        <img src="photo3.jpg" alt="Tinted Car 3" style={imageStyle} />
        {/* Add many more photos here */}
      </div>
    </section>
  );
}

const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px'
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
};

export default Gallery;
