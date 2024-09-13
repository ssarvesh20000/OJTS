import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageClicked from './ImageClicked';
import lebron from '../assets/lebron.png';

function SmallGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%'},
    { src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%'},
    { src: lebron, make: 'Lebron\'s Mom', model: 'Lebron James', f_tint: '0% (he black asf)', b_tint: '5%' },
    // Add more photos as needed
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };



  return (
    <section id="small-gallery" style={{ padding: '20px', scrollMarginTop: '100px' }}>
      <h2>Gallery</h2>
      <p>Here are a few examples of our recent work.</p>
      <div style={galleryStyle}>
          {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.name}
                style={imageStyle}
                onClick={() => handleImageClick(image)}
              />
            ))}
      </div>

      {selectedImage && (
        <ImageClicked
          isOpen={!!selectedImage}
          onClose={closePopup}
          image={selectedImage.src}
          make={selectedImage.make}
          model={selectedImage.model}
          f_tint={selectedImage.f_tint}
          b_tint={selectedImage.b_tint}
        />
      )}

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
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  cursor: 'pointer'
};

export default SmallGallery;
