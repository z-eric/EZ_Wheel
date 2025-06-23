/** WheelSpinner.tsx
 * Handles animating the Wheel component and determining the winner.
 */

import { useCallback, useState } from "react";
import Wheel from "./Wheel";

interface WheelSpinnerProps {
  isActive: boolean,
  isActiveSetter: (active: boolean) => void,
  winningLocationSetter: (location: number) => void,
}

let wedgePattern: number[];

const findWinningOption = (winningDegree: number) => {
  // console.log('\nwin deg ' + winningDegree)
  let normalized = (720 - winningDegree + 135) % 360 / 360;
  // console.log('normalized ' + normalized);
  let wedge = normalized * wedgePattern.length;
  // console.log('wedge ' + wedge)
  wedge = Math.round(wedge)
  return wedgePattern[wedge === wedgePattern.length ? 0 : wedge];
}

const WheelSpinner = ({isActive, isActiveSetter, winningLocationSetter}: WheelSpinnerProps) => {
  
  const [rotation, setRotation] = useState(0);

  const setWedgePattern = useCallback((pattern: number[]) => {
    wedgePattern = pattern;
  }, []);

  const spin = () => {
    isActiveSetter(true);
    const distance = 777 * (0.4 * Math.random() + 0.8);
    const duration = 1500 * (0.2 * Math.random() + 0.9);
    setTimeout(winningLocationSetter,1500,(findWinningOption((rotation + distance) % 360)));

    let timeStarted: number;
    const turn = (callTime: number) => {
      if (!timeStarted)
        timeStarted = callTime;
      const timePassed = callTime - timeStarted;
      const timeNormal = timePassed / duration;
      const increment = distance * (1 - (1 - timeNormal) ** 3); // Cubic bezier with maximal control points reduces to standard cubic
      const newRotation = (rotation + increment) % 360;

      setRotation(newRotation);

      if (timePassed < duration)
        requestAnimationFrame(turn);
        
    }
    requestAnimationFrame(turn);
    setTimeout(isActiveSetter,1500,false);
  }

  return (
    <>
      <div style={{
        // position: 'relative',
        transform: `rotate(${rotation}deg)`,
      }}>
        <Wheel
          sendWedgePattern={setWedgePattern}
        />
      
      </div>  
      <button onClick={spin} disabled={isActive} style={{position: 'absolute', top: 0, right: 0}}>spin</button>
      <div style={{position: 'absolute', left: 0, top: 0}}>{rotation}</div>
    </>
  )
}

export default WheelSpinner;