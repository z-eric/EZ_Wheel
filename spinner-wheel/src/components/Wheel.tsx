import React from 'react';
import Wedge from './Wedge';

let labelData = [
  {
    name: '👺',
    value: 3,
  },
  {
    name: '🤗',
    value: 3,
  },
  {
    name: '3️⃣',
    value: 10,
  },
  {
    name: '💀',
    value: 3,
  },
  {
    name: '🟩',
    value: 3,
  },
  {
    name: '------',
    value: 10,
  },
  {
    name: 'Hello',
    value: 3,
  },
];

let wedgePattern: number[] = [];

const calcWedgePattern = () => {
  console.clear();
  
  let totalWedges = 0; // The weights of all options added together.
  let maxDepth = 0; // The highest weight.
  for (let i = 0; i < labelData.length; i++){
    totalWedges += labelData[i].value;
    if (labelData[i].value > maxDepth)
      maxDepth = labelData[i].value;
  }

  console.log('totalWedges ' + totalWedges + ' maxDepth ' + maxDepth);
  wedgePattern = new Array(totalWedges);

  /* Iterate by "depth" first, assigning a wedge to every option before
    assigning any option a second wedge. Then any wedges that get a second
    before any get a third, etc. */
  for (let depth = 1; depth <= maxDepth; depth++){
    for (let i = 0; i < labelData.length; i++){

      // Determine if the option has a weight this deep.
      if (labelData[i].value >= depth) {
        let wedgesWithThisLabel = labelData[i].value;
        // Stagger the starting point according to how many options there are.
        let fractionalStart = Math.floor(totalWedges / labelData.length * i);
        // How far apart each wedge of the same option should be.
        let fractionalStep = Math.floor(totalWedges / wedgesWithThisLabel);
        // Assignment slot is the start offset by number of steps according to depth (mod for loop around).
        let slotToFill = (fractionalStart + (fractionalStep * (depth - 1))) % totalWedges;

        // Check if the assigned slot has already been taking, and move over until an empty is located.
        while (wedgePattern[slotToFill] !== undefined) {
          slotToFill++;
          slotToFill %= totalWedges;
        }

        // Place the assigned slot into the pattern.
        wedgePattern[slotToFill] = i;

        console.log('Depth ' + depth + ' Slot ' + slotToFill + ' ' + labelData[i].name + ' | ' + fractionalStart + ' ' + fractionalStep);
      }
    }
  }
  console.log('wedgePattern.length ' + wedgePattern.length);
  console.log('wedgePattern ' + wedgePattern);
};

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
        clipPath: 'circle(50%)',
      }}>
      {buildWedges()}
      
      </div>
  );
};

export default Wheel;