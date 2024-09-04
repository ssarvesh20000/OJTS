import React from 'react';

function SmallGallery() {
  return (
    <section id="small-gallery">
      <h2>Gallery</h2>
      <p>Here are a few examples of our recent work.</p>
      <div style={galleryStyle}>
        <img src="photo1.jpg" alt="Tinted Car 1" style={imageStyle} />
        <img src="photo2.jpg" alt="Tinted Car 2" style={imageStyle} />
        <img src="photo3.jpg" alt="Tinted Car 3" style={imageStyle} />
        {/* Add up to 6 photos */}
      </div>
    </section>
  );
}

const galleryStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
};

const imageStyle = {
  width: '30%',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
};

export default SmallGallery;
