import { useEffect, useState } from "react";
import { WheelOption } from "../contexts/WheelContext";

interface LabelItemProps {
  wheelOption: WheelOption;
  index: number;
  handleLabel: (text: string, index: number) => void;
  handleWeight: (weight: number, index: number) => void;
  handleColor: (index: number) => void;
}

const LabelItem = ({ wheelOption, index, handleLabel, handleWeight, handleColor }: LabelItemProps) => {

  /* This State creating an extra linkage between Context and the input allows:
    - Anything to be typed. Intuitive UI. Direct link to Context with disallowed
        values means keystrokes may seem unresponsive and you can't clear the input.
    - Immediate update of the visual wheel state as valid input is typed.
    - Zeroing out the inputs on exit when left with invalid input. */
  const [weightInput, setWeightInput] = useState('');
  const changeWeight = (value: string) => {
    setWeightInput(value);
    let weight = Number.parseInt(value);
    if (weight >= 0) {
      handleWeight(weight, index);
    }
    else {
      handleWeight(0, index);
    };
  }
  const clearInvalidWeight = (value: string) => {
    if (wheelOption.value.toString() !== value) {
      setWeightInput('f');
    }
  }

  // For some reason the very first option to get rendered doesn't have it's
  // value read properly if this is placed directly in the state initializer.
  useEffect(() => {
    setWeightInput(wheelOption.value.toString());
  }, [ wheelOption.value])

  return (
    <div style={{display: 'flex'}}>
      <input value={weightInput}
        onChange={(e) => changeWeight(e.target.value)}
        onBlur={(e) => clearInvalidWeight(e.target.value)}
        style={{
          width: '2rem',
          border: '1px solid black',
        }} />
      <input value={wheelOption.label} onChange={(e) => handleLabel(e.target.value, index)}
        style={{
          border: '1px solid black',
        }} />
      <div onClick={(e) => handleColor(index)}
        title={`${wheelOption.color ? 'Custom Color' : 'Theme Auto Color'}`}
        style={{
          background: `${wheelOption.color ?? 'linear-gradient(135deg, #FFF5 30%, #0005 70%)'}`,
          border: '1px solid black',
          display: 'inline-block',
          width: '1rem',
          height: '1rem',
          paddingTop: '0.1rem',
        }} />
    </div>
  )
}

export default LabelItem;