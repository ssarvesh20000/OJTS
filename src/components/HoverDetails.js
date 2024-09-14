// HoverDetails.js
import React from 'react';

function HoverDetails({ make, model, f_tint, b_tint }) {
  return (
    <div>
      <p><strong>Make:</strong> {make}</p>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Front Tint:</strong> {f_tint}</p>
      <p><strong>Back Tint:</strong> {b_tint}</p>
    </div>
  );
}

export default HoverDetails;
