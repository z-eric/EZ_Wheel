import React from 'react';
import Wedge from './Wedge';

let labelData = [
  {
    name: 'one',
    value: 1,
  },
  {
    name: 'OPPOSITES',
    value: 2,
  },
  {
    name: 'uno',
    value: 1,
  },
  {
    name: 'ein',
    value: 1,
  },
  {
    name: 'won',
    value: 1,
  },
  {
    name: '------',
    value: 9,
  },
  {
    name: 'ono',
    value: 1,
  },
];

let wedgePattern: number[] = [];

const calcWedgePattern = () => {
  console.clear();
  //start each label at the fractional position related to its numerical count
  //push things over as necessary

  let totalWedges = 0;
  let maxDepth = 0;
  let extraWedgesSoFar = 0;
  let firstAvailableSlot = 0;

  for (let i = 0; i < labelData.length; i++){
    totalWedges += labelData[i].value;
    if (labelData[i].value > maxDepth)
      maxDepth = labelData[i].value;
  }

  console.log('totalWedges ' + totalWedges + ' maxDepth ' + maxDepth);
  wedgePattern = new Array(totalWedges);

  for (let depth = 1; depth <= maxDepth; depth++){
    for (let i = 0; i < labelData.length; i++){

      if (labelData[i].value >= depth) {
        let wedgesWithThisLabel = labelData[i].value;
        let fractionalStart = Math.floor(totalWedges / labelData.length * i);
        let fractionalStep = Math.floor(totalWedges / wedgesWithThisLabel);
        // console.log(fractionalStart);
      
        // for (let j = 0; j < wedgesWithThisLabel; j++){
        let slotToFill = (fractionalStart + (fractionalStep * (depth - 1))) % totalWedges;
        // console.log('first pick ' + slotToFill)

        while (wedgePattern[slotToFill] !== undefined) {
          // extraWedgesSoFar++;
          slotToFill++;
          slotToFill %= totalWedges;
        }

        wedgePattern[slotToFill] = i;
        console.log('Depth ' + depth + ' Slot ' + slotToFill + ' ' + labelData[i].name + ' | ' + fractionalStart + ' ' + fractionalStep);
        // }//for j
      }
    }
  }
  console.log('wedgePattern.length ' + wedgePattern.length);
  console.log('wedgePattern ' + wedgePattern);
};

// const calcWedgePattern = () => {
//   console.clear();

//   let totalWedges = 0;
//   let extraWedgesSoFar = 0;

//   for (let i = 0; i < labelData.length; i++){
//     totalWedges += labelData[i].value;
//   }
//   console.log('totalWedges ' + totalWedges);
//   wedgePattern = new Array(totalWedges);

//   for (let i = 0; i < labelData.length; i++){
//     let wedgesWithThisLabel = labelData[i].value;
    
//     for (let j = 0; j < wedgesWithThisLabel; j++){
//       //                    
//       let slotToFill = i + extraWedgesSoFar + (Math.floor(totalWedges / wedgesWithThisLabel) * j);
//       if (wedgePattern[slotToFill] !== undefined) {
//         extraWedgesSoFar++;
//         slotToFill++;
//       }
//       wedgePattern[slotToFill] = i;
//       console.log('Slot ' + slotToFill + ' ' + labelData[i].name + ' | ' + extraWedgesSoFar);
//     }
//   }
//   console.log('wedgePattern.length ' + wedgePattern.length);
//   console.log('wedgePattern ' + wedgePattern);
// };

// const wheelData = Array(32).fill({name: 'Test', value: 1,})
let wheelData = [
  {
    name: 'Sarah',
    value: 1,
  },
  {
    name: 'Becca',
    value: 2,
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
//   let numWedge = wheelData.length;
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

  calcWedgePattern();

  // cartesian from polar
  // x = r * cos(angle)
  // y = r * sin(angle)
  let numWedge = wedgePattern.length;
  let degrees = 360 / numWedge /2;
  let radians = degrees * Math.PI / 180;
  let wedgeX = 4.5 * Math.cos(radians);
  let wedgeY = 4.5 * Math.sin(radians);

  return (
    <>
      {wedgePattern.map((wheelDatum, i) => (
        <Wedge
          label={labelData[wedgePattern[i]].name}
          angle={i * (360 / wedgePattern.length)}
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