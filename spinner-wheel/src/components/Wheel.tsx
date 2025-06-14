import React from 'react';
import Wedge from './Wedge';

const wheelData = [
  {
    name: 'Sarah',
    angle: 0,
  },
  {
    name: 'Becca',
    angle: 40,
  },
  {
    name: 'Chuck',
    angle: 50,
  },
  {
    name: 'Erin',
    angle: 180,
  },
  {
    name: 'Bree',
    angle: 120,
  },
  {
    name: 'Phil',
    angle: 230,
  },
  {
    name: 'Joshua',
    angle: 290,
  },
];

const wedges = wheelData.map((wheelDatum) => {
  return (
    <Wedge label={wheelDatum.name} angle={wheelDatum.angle} />
  );
});

const Wheel = () => {

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor:'lightgray',
        width: '30rem',
        height: '30rem',
        // clipPath: 'circle(50%)',
      }}>
      {wedges}
    </div>
  );
};

export default Wheel;