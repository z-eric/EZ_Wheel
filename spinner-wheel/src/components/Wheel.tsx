import React from 'react';
import Wedge from './Wedge';

const wheelData = [
  {
    name: 'Sarah',
    angle: 0,
    value: 1,
  },
  {
    name: 'Becca',
    angle: 40,
    value: 1,
  },
  {
    name: 'Chuck',
    angle: 50,
    value: 1,
  },
  {
    name: 'Erin',
    angle: 180,
    value: 1,
  },
  {
    name: 'Bree',
    angle: 120,
    value: 1,
  },
  {
    name: 'Phil',
    angle: 230,
    value: 1,
  },
  {
    name: 'Joshua',
    angle: 290,
    value: 1,
  },
];


const wedges = wheelData.map((wheelDatum, i) => {

  return (
    <Wedge
      label={wheelDatum.name}
      angle={i * (360 / wheelData.length)}
      size={Math.tan(Math.PI / wheelData.length) * 100 }
    />
  );
});

const Wheel = () => {

  // x = r * cos(θ)
  // y = r * sin(θ)
  var numWedge = 3;
  var degrees = 360 / numWedge;
  var radians = degrees * Math.PI / 180;
  var wedgeX = 4.5 * Math.cos(radians);
  var wedgeY = 4.5 * Math.sin(radians);

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor:'lightgray',
        width: '30rem',
        height: '30rem',
        // clipPath: 'circle(50%)',
      }}>
      {/* {wedges} */}
      
      <svg width='100%' height='100%' viewBox='0 0 10 10'
        style={{ backgroundColor: 'cyan' }}
      >
        <path
          d={`M 5 5
            l 4.5 0
            a 4.5 4.5 0 0 0 ${wedgeX - 4.5} ${-wedgeY}
            Z`}
          fill='blue' stroke='black' strokeWidth={'0.1'}
        />
      </svg>
      
      {degrees}<br/>{radians}<br/>{wedgeX}<br/>{wedgeY}
      </div>
  );
};

export default Wheel;