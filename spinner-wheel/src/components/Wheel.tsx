/** Wheel.tsx
 * Calculates, builds, and renders the wheel wedges based
 * on the weights given to the options.
 * Passes the resulting wedge pattern back up to WheelSpinner
 * for correlating winning wedge with actual label.
 */ 

import { memo, useContext } from 'react';
import Wedge from './Wedge';
import { WheelContext, WheelOption } from '../contexts/WheelContext';

interface WheelProps {
  sendWedgePattern: (pattern: number[]) => void;
}

const wheelRadius = 10;

let wedgePattern: number[] = [];

/** Calculates the number and positions of wedges based on
 * the provided weights. Algorithm attempts to minimize clumping
 * of repeated wedges.
 */
const calcWedgePattern = (wheelData : WheelOption[]) => {
  console.clear();
  
  let totalWedges = 0; // The weights of all options added together.
  let maxDepth = 0; // The highest weight.
  for (let i = 0; i < wheelData.length; i++){
    totalWedges += wheelData[i].value;
    if (wheelData[i].value > maxDepth)
      maxDepth = wheelData[i].value;
  }

  console.log('totalWedges ' + totalWedges + ' maxDepth ' + maxDepth);
  wedgePattern = new Array(totalWedges);

  /* Iterate by "depth" first, assigning a wedge to every option before
    assigning any option a second wedge. Then any wedges that get a second
    before any get a third, etc. */
  for (let depth = 1; depth <= maxDepth; depth++){
    for (let i = 0; i < wheelData.length; i++){

      // Determine if the option has a weight this deep.
      if (wheelData[i].value >= depth) {
        let wedgesWithThisLabel = wheelData[i].value;
        // Stagger the starting point according to how many options there are.
        let fractionalStart = Math.floor(totalWedges / wheelData.length * i);
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

        console.log('Depth ' + depth + ' Slot ' + slotToFill + ' ' + wheelData[i].label + ' | ' + fractionalStart + ' ' + fractionalStep);
      }
    }
  }
  console.log('wedgePattern.length ' + wedgePattern.length);
  console.log('wedgePattern ' + wedgePattern);
};

/** Calculates the mathematical properties each wedge requires
 * and returns the array of assembled Wedges.
 */
const buildWedges = (wheelData: WheelOption[], wheelRadius: number) => {
  // cartesian from polar
  // x = r * cos(angle)
  // y = r * sin(angle)
  let viewBox = wheelRadius * 2;
  wheelRadius *= 0.97;
  let numWedge = wedgePattern.length;
  let degrees = 360 / numWedge /2;
  let radians = degrees * Math.PI / 180;
  let wedgeX = wheelRadius * Math.cos(radians);
  let wedgeY = wheelRadius * Math.sin(radians);

  return (
    <>
      {wedgePattern.map((optionIndex, wedgeIndex) => (
        <Wedge
          key={wedgeIndex}
          wheelRadius={wheelRadius}
          label={wheelData[optionIndex].label}
          angle={wedgeIndex * (360 / wedgePattern.length)}
          wedgeX={wedgeX}
          wedgeY={wedgeY}
          viewBox={viewBox}
        />
      ))}
    </>
  );
};

const Wheel = memo(({sendWedgePattern} : WheelProps) => {
  const wheelContext = useContext(WheelContext);

  calcWedgePattern(wheelContext.data);
  sendWedgePattern(wedgePattern);

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '30rem',
          height: '30rem',
        }}>
        {buildWedges(wheelContext.data, wheelRadius)}
      </div>
    </>
  );
});

export default Wheel;