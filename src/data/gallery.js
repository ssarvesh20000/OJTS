// Completed installs shown on the Our Work page. `front`/`rear` are the tint
// shades used; add or reorder entries here to change the gallery.
import lambo from '../assets/carGal/lambo.png';
import ferrari488 from '../assets/carGal/ferrari488.png';
import honda from '../assets/carGal/hondaR.png';
import mustang from '../assets/carGal/mustang.png';
import greenm3 from '../assets/carGal/greenm3.png';
import challenger from '../assets/carGal/challenger.png';
import benzgt55 from '../assets/carGal/benzgt55.png';
import cybertruckwhite from '../assets/carGal/cybertruckwhite.png';
import vettec8 from '../assets/carGal/vettec8.png';
import modelX from '../assets/carGal/modelX.png';
import bentley from '../assets/carGal/bentley.png';
import rivian from '../assets/carGal/rivian1.png';
import cybertruckgreen from '../assets/carGal/cybertruckgreen.png';
import teslaY from '../assets/carGal/tesla-y.png';
import bmwM3 from '../assets/carGal/bmwm3.png';
import tacoma from '../assets/carGal/tacoma.png';
import mazda from '../assets/carGal/mazda.png';
import lexus from '../assets/carGal/lexusRC350.png';
import blackc8 from '../assets/carGal/blackc8.png';
import g37 from '../assets/carGal/g37.png';
import truck from '../assets/carGal/Truck.png';

export const GALLERY = [
  { src: lambo, make: 'Lamborghini', model: 'Huracán', front: '5%', rear: '5%' },
  { src: ferrari488, make: 'Ferrari', model: '488', front: '5%', rear: '5%' },
  { src: honda, make: 'Honda', model: 'Civic Type R', front: '35%', rear: '35%' },
  { src: mustang, make: 'Ford', model: 'Mustang', front: '35%', rear: '5%' },
  { src: greenm3, make: 'BMW', model: 'M3', front: '5%', rear: '5%' },
  { src: challenger, make: 'Dodge', model: 'Challenger', front: '20%', rear: '20%' },
  { src: benzgt55, make: 'Mercedes-Benz', model: 'AMG GT 55', front: '0%', rear: '5%' },
  { src: cybertruckwhite, make: 'Tesla', model: 'Cybertruck', front: '50%', rear: '5%' },
  { src: vettec8, make: 'Corvette', model: 'C8 Z06', front: '70%', rear: '70%' },
  { src: modelX, make: 'Tesla', model: 'Model X', front: '70%', rear: '70%' },
  { src: bentley, make: 'Bentley', model: 'Bentayga', front: '20%', rear: '20%' },
  { src: rivian, make: 'Rivian', model: 'R1S', front: '50%', rear: '15%' },
  { src: cybertruckgreen, make: 'Tesla', model: 'Cybertruck', front: '20%', rear: '20%' },
  { src: teslaY, make: 'Tesla', model: 'Model Y', front: '30%', rear: '5%' },
  { src: bmwM3, make: 'BMW', model: 'M3', front: '20%', rear: '20%' },
  { src: tacoma, make: 'Toyota', model: 'Tacoma', front: '20%', rear: '20%' },
  { src: mazda, make: 'Mazda', model: 'RX-7', front: '30%', rear: '30%' },
  { src: lexus, make: 'Lexus', model: 'RC 350', front: '5%', rear: '5%' },
  { src: blackc8, make: 'Corvette', model: 'C8 Z06', front: '30%', rear: '30%' },
  { src: g37, make: 'Infiniti', model: 'G37', front: '50%', rear: '5%' },
  { src: truck, make: 'Freightliner', model: 'Pickup', front: '35%', rear: '35%' },
];

export function tintSummary({ front, rear }) {
  return front === rear ? `${front} all around` : `${front} front • ${rear} rear`;
}
