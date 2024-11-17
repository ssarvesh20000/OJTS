import React, { useState } from 'react';
import ImageClicked from './ImageClicked';
import teslaY from '../assets/carGal/tesla-y.png'; 
import lexus from '../assets/carGal/lexusRC350.png';
import honda from '../assets/carGal/hondaR.png';
import bmw from '../assets/carGal/bmwm3.png';
import Rivian1 from '../assets/carGal/rivian1.png';
import vettec8 from '../assets/carGal/vettec8.png';
import modelX from '../assets/carGal/modelX.png';
import bentley from '../assets/carGal/bentley.png';
import cybertruckwhite from '../assets/carGal/cybertruckwhite.png';
import cybertruckgreen from '../assets/carGal/cybertruckgreen.png';
import ferrari488 from '../assets/carGal/ferrari488.png';
import benzgt55 from '../assets/carGal/benzgt55.png';
import tacoma from '../assets/carGal/tacoma.png';
import mazda from '../assets/carGal/mazda.png';
import greenm3 from '../assets/carGal/greenm3.png';
import blackc8 from '../assets/carGal/blackc8.png';
import challenger from '../assets/carGal/challenger.png';
import mustang from '../assets/carGal/mustang.png';
import lambo from '../assets/carGal/lambo.png';
import Truck from '../assets/carGal/Truck.png';
import g37 from '../assets/carGal/g37.png';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: lambo, make: 'Lamborghini', model: 'Hurucan', f_tint: '5%', b_tint: '5%' },
    { src: ferrari488, make: 'Ferrari', model: '488', f_tint: '5%', b_tint: '5%' },
    { src: honda, make: 'Honda', model: 'Type R', f_tint: '35%', b_tint: '35%' },
    { src: mustang, make: 'Ford', model: 'Mustang', f_tint: '35%', b_tint: '5%' },
    { src: greenm3, make: 'BMW', model: 'M3', f_tint: '5%', b_tint: '5%' },
    { src: challenger, make: 'Dodge', model: 'Challenger', f_tint: '20%', b_tint: '20%' },
    { src: benzgt55, make: 'Mercedees Benz', model: 'GT55', f_tint: '0%', b_tint: '5%' },
    { src: cybertruckwhite, make: 'Tesla', model: 'Cybertruck', f_tint: '50%', b_tint: '5%' },
    { src: vettec8, make: 'Corvette', model: 'C8 Z06', f_tint: '70%', b_tint: '70%' },
    { src: modelX, make: 'Tesla', model: 'Model X', f_tint: '70%', b_tint: '70%' },
    { src: bentley, make: 'Bentley', model: 'Bentayga', f_tint: '20%', b_tint: '20%' },
    { src: Rivian1, make: 'Rivian', model: 'R1S', f_tint: '50%', b_tint: '15%' },
    { src: cybertruckgreen, make: 'Tesla', model: 'Cybertruck', f_tint: '20%', b_tint: '20%' },
    { src: teslaY, make: 'Tesla', model: 'Model Y', f_tint: '30%', b_tint: '5%' },
    { src: bmw, make: 'BMW', model: 'M3', f_tint: '20%', b_tint: '20%' },
    { src: tacoma, make: 'Toyota', model: 'Tacoma', f_tint: '20%', b_tint: '20%' },
    { src: mazda, make: 'Mazda', model: 'RX7', f_tint: '30%', b_tint: '30%' },
    { src: lexus, make: 'Lexus', model: 'RC350', f_tint: '5%', b_tint: '5%' },
    { src: blackc8, make: 'Corvette', model: 'C8 Z06', f_tint: '30%', b_tint: '30%' },
    { src: g37, make: 'Infiniti', model: 'G37', f_tint: '50%', b_tint: '5%' },
    { src: Truck, make: 'Freightliner', model: 'pickup truck', f_tint: '35%', b_tint: '35%' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const galleryStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '10px',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    width: '30%',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .gallery-container img {
        width: 80% !important;
        margin: 5px auto;
      }
    }
  `;

  return (
    <section style={{ padding: '20px' }} className="gallery-container">
      <h2>Main Gallery</h2>
      <p style={{ fontFamily: 'Merriweather, serif', fontSize: '14px', color: '#ddd' }}>
        Explore 2000+ tinting projects on our Instagram
      </p>
      <style>{mediaQueryStyle}</style>
      <div style={galleryStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.model}
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
    </section>
  );
}

export default Gallery;