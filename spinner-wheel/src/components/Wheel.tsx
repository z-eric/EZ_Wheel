import React from 'react';
import Wedge from './Wedge';

// const wheelData = Array(32).fill({name: 'Test', value: 1,})
const wheelData = [
  {
    name: 'Sarah',
    value: 1,
  },
  {
    name: 'Becca',
    value: 1,
  },
  {
    name: 'Chuck',
    value: 1,
  },
  {
    name: 'Erin',
    value: 1,
  },
  {
    name: 'Bree',
    value: 1,
  },
  {
    name: 'Phil',
    value: 1,
  },
  {
    name: 'Joshua',
    value: 1,
  },
];

// const wedges = wheelData.map((wheelDatum, i) => {

//   // x = r * cos(θ)
//   // y = r * sin(θ)
//   var numWedge = wheelData.length;
//   var degrees = 360 / numWedge /2;
//   var radians = degrees * Math.PI / 180;
//   var wedgeX = 4.5 * Math.cos(radians);
//   var wedgeY = 4.5 * Math.sin(radians);
//   console.log(radians);

//   return (
//     <Wedge
//       label={wheelDatum.name}
//       angle={i * (360 / wheelData.length)}
//       wedgeX={wedgeX}
//       wedgeY={wedgeY}
//     />
//   );
// });

const buildWedges = () => {

  // x = r * cos(θ)
  // y = r * sin(θ)
  var numWedge = wheelData.length;
  var degrees = 360 / numWedge /2;
  var radians = degrees * Math.PI / 180;
  var wedgeX = 4.5 * Math.cos(radians);
  var wedgeY = 4.5 * Math.sin(radians);

  return (
    <>
      {wheelData.map((wheelDatum, i) => (
        <Wedge
          label={wheelDatum.name}
          angle={i * (360 / wheelData.length)}
          wedgeX={wedgeX}
          wedgeY={wedgeY}
        />
      ))}
    </>
  );
};

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
      {buildWedges()}
      
      </div>
  );
};

export default Wheel;