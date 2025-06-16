import { useState } from "react";
import Wheel from "./Wheel";
import { WheelOption } from "./MainPanel";

interface WheelSpinnerProps {
  wheelData: WheelOption[],
  isActive: boolean,
  isActiveSetter: (active: boolean) => void,
  winningLocationSetter: (location: number) => void,
}

const WheelSpinner = ({ ...props }: WheelSpinnerProps) => {
  
  const [rotation, setRotation] = useState(0);

  let wedgePattern: number[];
  const setWedgePattern = (pattern: number[]) => {
    wedgePattern = pattern;
  };

  

  const spin = () => {
    const distance = 1800;
    const duration = 3000;

    let timeStarted: number;
    const turn = (callTime: number) => {
      if (!timeStarted)
        timeStarted = callTime;
      const timePassed = callTime - timeStarted;
      const increment = distance * (timePassed / duration);
      const newRotation = (rotation + increment) % 360;

      setRotation(newRotation);

      if (timePassed < duration)
        requestAnimationFrame(turn);
    }
    requestAnimationFrame(turn);
  }

  
  return (
    <>
      <div style={{
        // position: 'absolute',
        transform: `rotate(${rotation}deg)`,
      }}>
        <Wheel
          wheelData={props.wheelData}
          sendWedgePattern={setWedgePattern}
        />
          
      </div>  
      <br/>
      <button onClick={spin } style={{position: 'absolute'}}>O</button>
      <div style={{position: 'absolute', left: 0}}>{rotation}</div>
    </>
  )
}

export default WheelSpinner;