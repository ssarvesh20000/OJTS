// Tint shades offered in the simulator, lightest to darkest. `vlt` is the
// film's visible light transmission (the % on the box); null is untinted.
export const SHADES = [
  { vlt: null, label: 'No tint', note: 'Factory glass, fully see-through.' },
  { vlt: 70, label: '70%', note: 'Barely there. Cuts heat and UV with almost no change in look.' },
  { vlt: 50, label: '50%', note: 'A light, clean tint. Interior still clearly visible.' },
  { vlt: 35, label: '35%', note: 'Our most popular. Noticeably darker with a classy look.' },
  { vlt: 20, label: '20%', note: 'Dark and private. Hard to see in during the day.' },
  { vlt: 15, label: '15%', note: 'Very dark. Strong privacy from the outside.' },
  { vlt: 5, label: '5%', note: 'Limo tint. Nearly blacked out from the outside.' },
];

// Window zones the customer can tint separately, in the order shown.
export const WINDOW_ZONES = [
  { id: 'front', label: 'Front side windows', short: 'Front sides' },
  { id: 'rear', label: 'Rear side windows', short: 'Rear sides' },
  { id: 'back', label: 'Rear window', short: 'Rear window' },
  { id: 'windshield', label: 'Windshield', short: 'Windshield' },
  { id: 'roof', label: 'Sunroof', short: 'Sunroof' },
];

// Bare automotive glass already blocks a little light.
const CLEAR_GLASS = 0.9;

// How much of the interior shows through glass with a given film, from 0
// (black) to 1. Looking into a car from outside, light passes through the
// film twice (in to light the cabin, back out to your eye), so what you see
// scales with VLT squared. The scene can't light the cabin through the
// glass, so a softer exponent (1.3) stands in for that second pass; tuned by
// eye so each shade steps down evenly.
export function interiorVisibility(vlt) {
  if (vlt == null) return CLEAR_GLASS;
  return CLEAR_GLASS * Math.pow(vlt / 100, 1.3);
}

// Swatch colour for a shade's button: the same darkness the glass gets.
export function swatchColor(vlt) {
  const v = Math.round(255 * Math.pow(interiorVisibility(vlt), 1 / 2.2));
  return `rgb(${v}, ${v}, ${v})`;
}
