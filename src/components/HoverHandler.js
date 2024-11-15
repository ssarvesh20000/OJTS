// HoverHandler.js
import { useState } from 'react';

export function useHover() {
  const [hoveredImageId, setHoveredImageId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredImageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  return { hoveredImageId, handleMouseEnter, handleMouseLeave };
}
