/** WheelSpinner.tsx
 * Handles animating the Wheel component and determining the winner.
 */

import { forwardRef, useCallback, useImperativeHandle, useState, useContext } from "react";
import Wheel from "./Wheel";
import { SettingsContext } from "../contexts/SettingsContext";

interface WheelSpinnerProps {
  isActiveSetter: (active: boolean) => void,
  winningLocationSetter: (location: number) => void,
}

export interface WheelSpinRef { startSpin: () => void }

const SPIN_DURATION = 6000;
const WIN_DELAY = 200;
let wedgePattern: number[];

const findWinningOption = (winningDegree: number) => {
  let normalized = (720 - winningDegree + 135) % 360 / 360;
  let wedge = normalized * wedgePattern.length;
  wedge = Math.round(wedge)
  return wedgePattern[wedge === wedgePattern.length ? 0 : wedge];
}

const WheelSpinner = forwardRef<WheelSpinRef, WheelSpinnerProps>((props, callSpin) => {
  const { isActiveSetter, winningLocationSetter } = props;
  const settingsContext = useContext(SettingsContext);
  
  const [rotation, setRotation] = useState(0);

  const setWedgePattern = useCallback((pattern: number[]) => {
    wedgePattern = pattern;
  }, []);

  const spin = () => {
    isActiveSetter(true);
    const distance = 4000 + (settingsContext.spinModifier * 0.8) + (800 * Math.random());
    const duration = SPIN_DURATION + settingsContext.spinModifier * (0.2 * Math.random() + 0.9);
    setTimeout(winningLocationSetter, duration + WIN_DELAY, (findWinningOption((rotation + (distance * 0.5)) % 360)));

    let timeStarted: number;
    const turn = (callTime: number) => {
      if (!timeStarted)
        timeStarted = callTime;
      const timePassed = callTime - timeStarted;
      const timeNormal = timePassed / duration;
      const increment = 0.5 * distance * (1 - (1 - timeNormal) ** 3); // Cubic bezier with maximal control points reduces to standard cubic
      const newRotation = (rotation + increment) % 360;

      setRotation(newRotation);

      if (timePassed < duration)
        requestAnimationFrame(turn);
        
    }
    requestAnimationFrame(turn);
    setTimeout(isActiveSetter, duration + WIN_DELAY, false);
  }

  useImperativeHandle(callSpin, () => ({
    startSpin: spin
  }))

  return (
    <>
      <div style={{
        transform: `rotate(${rotation}deg)`,
      }}>
        <Wheel
          sendWedgePattern={setWedgePattern}
        />
      </div>
    </>
  )
});

export default WheelSpinner;