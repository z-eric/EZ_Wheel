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
  let normalized = (360 - winningDegree) / 360;
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
    const distance = 777;
    const duration = 1500;
    //TODO spin randomized
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
        // position: 'absolute',
        transform: `rotate(${rotation}deg)`,
      }}>
        <Wheel
          sendWedgePattern={setWedgePattern}
        />
      
      </div>  
      <br/>
      <button onClick={spin} disabled={isActive} style={{position: 'absolute', top: 0}}>spin</button>
      <div style={{position: 'absolute', left: 0,}}>{rotation}</div>
    </>
  )
}

export default WheelSpinner;