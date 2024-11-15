import React from 'react';

function HoverDetails({ make, model, f_tint, b_tint }) {
  const styles = {
    container: {
      padding: '10px',
      fontSize: '16px', // Default size for desktop
    },
    item: {
      margin: '5px 0',
    },
    '@media (max-width: 600px)': {
      container: {
        padding: '8px',
        fontSize: '12px', // Smaller size for mobile devices
      },
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.item}><strong>Make:</strong> {make}</p>
      <p style={styles.item}><strong>Model:</strong> {model}</p>
      <p style={styles.item}><strong>Front Tint:</strong> {f_tint}</p>
      <p style={styles.item}><strong>Back Tint:</strong> {b_tint}</p>
    </div>
  );
}

export default HoverDetails;
