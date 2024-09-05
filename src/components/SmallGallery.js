import React from 'react';
import { Link } from 'react-router-dom';

function SmallGallery() {
  return (
    <section id="small-gallery" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Gallery</h2>
      <p>Here are a few examples of our recent work.</p>
      <div style={galleryStyle}>
        <img src="photo1.jpg" alt="Tinted Car 1" style={imageStyle} />
        <img src="photo2.jpg" alt="Tinted Car 2" style={imageStyle} />
        <img src="photo3.jpg" alt="Tinted Car 3" style={imageStyle} />
        {/* Add up to 6 photos */}
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
  flexWrap: 'wrap'
};

const imageStyle = {
  width: '30%',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
};

export default SmallGallery;
