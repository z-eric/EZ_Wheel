/** Wheel.tsx
 * Calculates, builds, and renders the wheel wedges based
 * on the weights given to the options.
 * Passes the resulting wedge pattern back up to WheelSpinner
 * for correlating winning wedge with actual label.
 */ 

import { memo, useContext } from 'react';
import Wedge from './Wedge';
import { WheelContext, WheelOption } from '../contexts/WheelContext';
import { Theme } from '../themes/themes';
import { ThemeContext } from '../contexts/ThemeContext';

interface WheelProps {
  sendWedgePattern: (pattern: number[]) => void;
}

const wheelRadius = 15;

let wedgePattern: number[] = [];

/** Calculates the number and positions of wedges based on
 * the provided weights. Algorithm attempts to minimize clumping
 * of repeated wedges.
 */
const calcWedgePattern = (wheelData : WheelOption[]) => {
  // console.clear();
  
  let totalWedges = 0; // The weights of all options added together.
  let maxDepth = 0; // The highest weight.
  for (let i = 0; i < wheelData.length; i++){
    totalWedges += wheelData[i].value;
    if (wheelData[i].value > maxDepth)
      maxDepth = wheelData[i].value;
  }

  // console.log('totalWedges ' + totalWedges + ' maxDepth ' + maxDepth);
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

        // console.log('Depth ' + depth + ' Slot ' + slotToFill + ' ' + wheelData[i].label + ' | ' + fractionalStart + ' ' + fractionalStep);
      }
    }
  }

  /* Go around the wheel twice checking for adjacent duplicates and swapping
    them if the previous is not also the same thing. n iterations seems to
    solve adjacency of up to n+1 except in cases of extreme imbalance. 
    As an option weight approaches half the weight total adjacency becomes unavoidable. */
  for (let current = 0, limit = 0; limit < wedgePattern.length * 2; current++, limit++){
    current = current % wedgePattern.length; // stay within array bounds
    let prev = current === 0 ? wedgePattern.length - 1 : current - 1; // set prev accounting for wrap around
    let next = current === wedgePattern.length - 1 ? 0 : current + 1; // set next accounting for wrap around
    if (wedgePattern[prev] !== wedgePattern[current]
      && wedgePattern[current] === wedgePattern[next]
    ) {
      let hold = wedgePattern[current];
      wedgePattern[current] = wedgePattern[prev];
      wedgePattern[prev] = hold;
    }
  }
};

/** Calculates the mathematical properties each wedge requires
 * and returns the array of assembled Wedges.
 */
const buildWedges = (wheelData: WheelOption[], wheelRadius: number, theme: Theme) => {
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
          themeClass={'default'} // TODO dynamic theme
          key={wedgeIndex}
          wheelRadius={wheelRadius}
          label={wheelData[optionIndex].label}
          angle={wedgeIndex * (360 / wedgePattern.length)}
          wedgeX={wedgeX}
          wedgeY={wedgeY}
          viewBox={viewBox}
          // color={wheelData[optionIndex].color ?? `hsl(${(360 / wheelData.length) * optionIndex} 50% 50%)`} // programmatic hue
          // color={wheelData[optionIndex].color ?? `hsl(250 50% ${100 - ((50 / wheelData.length) * optionIndex)}%)`} // programmatic lightness
          // color={wheelData[optionIndex].color ?? `hsl(${optionIndex % 2 === 0 ? '110' : '200'} 50% ${90 - ((70 / wheelData.length) * Math.floor(optionIndex / 2))}%)`} // programmatic lightness & dual hue
          // color={wheelData[optionIndex].color ?? theme.wedgeColors[optionIndex % theme.wedgeColors.length]} // theme provider
          
          color={wheelData[optionIndex].color ?? `var(--wedge${optionIndex % 6})`} // theme
        />
      ))}
    </>
  );
};

const Wheel = memo(({sendWedgePattern} : WheelProps) => {
  const wheelContext = useContext(WheelContext);
  const themeContext = useContext(ThemeContext);

  calcWedgePattern(wheelContext.data);
  sendWedgePattern(wedgePattern);

  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '40rem',
          height: '40rem',
        }}>
        {buildWedges(wheelContext.data, wheelRadius, themeContext.themes[themeContext.selectedTheme])}
      </div>
    </>
  );
});

export default Wheel;