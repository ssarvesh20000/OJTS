import React, { useEffect } from 'react';
import './Services.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Services() {
  useEffect(() => {
    const rectangles = document.querySelectorAll('.service-rectangle');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add scroll animation
          entry.target.classList.add('visible');
          
          // Add hover-enabled class after scroll animation completes
          setTimeout(() => {
            entry.target.classList.add('hover-enabled');
          }, 0);

          observer.unobserve(entry.target); // Stop observing once the animation triggers
        }
      });
    }, { threshold: 0.5 });

    rectangles.forEach(rectangle => {
      observer.observe(rectangle);
    });
  }, []);

  return (
    <section id="services" className="services-section">
      <div style={{ height: '40px' }}></div> {/* This adds the empty space */}
      {/* Container for the title and rectangles */}
      <div className="services-container">
        {/* Blue-colored title for Services */}
        <h2>Tints We Offer</h2>

        <div className="rectangles-container">
          <div className="service-rectangle hidden">
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} /> {/* Icon styling */}
            <h3>AutoBahn Black</h3>
            <p style={{ color: 'black' }}>
              Not looking to break the bank, yet, still have the visual and UV benefits of window tints? 
              Autobahn’s Black Film offers privacy, UV protection, and glare reduction, making your car’s 
              interior more comfortable to drive in. This option is the entry - level window film with an 
              affordable price.
            </p>
          </div>

          <div className="service-rectangle hidden">
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} /> {/* Icon styling */}
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} />
            <h3>AutoBahn Air Ceramic</h3>
            <p style={{ color: 'black' }}>
              A crystal clear, ceramic window film that blocks out heat and harmful UV rays; perfect for
              those who are looking to gain the benefits of a premium window film without altering the 
              appearance of their vehicle.
            </p>
          </div>

          <div className="service-rectangle hidden">
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} /> {/* Icon styling */}
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} />
            <h3>AutoBahn Black Ceramic</h3>
            <p style={{ color: 'black' }}>
              For a more premium option, Autobahn’s Black Ceramic Film offers the same benefits as the previous
              two combined. Meaning it has it all; privacy, glare reduction, heat rejection and UV protection. 
              A great choice for those in search of finer performance and style.
            </p>
          </div>

          <div className="service-rectangle hidden">
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} /> {/* Icon styling */}
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} />
            <AttachMoneyIcon style={{ fontSize: 40, color: '#000' }} />
            <h3>AutoBahn Ceramic i3</h3>
            <p style={{ color: 'black' }}>
              For those looking for the highest level of protection and performance in a film, the Ceramic i3 
              provides the most advanced capacity of all the performance benefits. Not only that, but it is the 
              most durable of all the films thanks to its multi-ceramic layer and thick deep dye construction.
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: '58px' }}></div> {/* This adds the empty space */}

    </section>
  );
}

export default Services;
