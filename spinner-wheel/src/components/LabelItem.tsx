import { ChangeEvent, KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { WheelOption } from "../contexts/WheelContext";

interface LabelItemProps {
  wheelOption: WheelOption;
  index: number;
  handleLabel: (text: string, index: number) => void;
  handleWeight: (weight: number, index: number) => void;
  handleColor: (event: MouseEvent<HTMLDivElement>, index: number) => void;
  handleAddDelete: (index: number) => void;
}

const LabelItem = ({ wheelOption, index, handleLabel, handleWeight, handleColor, handleAddDelete }: LabelItemProps) => {

  /* This State creating an extra linkage between Context and the input allows:
    - Anything to be typed. Intuitive UI. Direct link to Context with disallowed
        values means keystrokes may seem unresponsive and you can't clear the input.
    - Immediate update of the visual wheel state as valid input is typed.
    - Zeroing out the inputs on exit when left with invalid input. */
  const [weightInput, setWeightInput] = useState('');
  const changeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeightInput(e.target.value);
    let weight = Number.parseInt(e.target.value);
    if (weight >= 0) {
      handleWeight(weight, index);
    }
    else {
      handleWeight(0, index);
    };
  }
  const clearInvalidWeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (wheelOption.value.toString() !== e.target.value) {
      setWeightInput('0');
    }
  }

  // Support adding new option by hitting enter while focused on the input.
  const enterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (index === -1 && e.key === 'Enter') handleAddDelete(-1);
  }

  // For some reason the very first LabelItem option to get rendered doesn't have it's
  // value read properly if this is placed directly in the state initializer.
  useEffect(() => {
    setWeightInput(wheelOption.value.toString());
  }, [ wheelOption.value])

  return (
    <div style={{
      display: 'flex',
      margin: '0.2rem 0.5rem 0',
    }}>
      <input id={`weight${index}`}
        value={weightInput === '0' ? '' : weightInput}
        onChange={changeWeight}
        onBlur={clearInvalidWeight}
        onFocus={(e) => { e.target.select() }}
        className='label-input'
        style={{
          width: '2rem',
          textAlign: 'center',
          fontSize: '120%',
        }}
      />
      <input id={`label${index}`}
        value={wheelOption.label}
        onChange={(e) => handleLabel(e.target.value, index)}
        onKeyDown={enterKeyPress}
        className='label-input'
        style={{
        }}
      />
      <div onClick={(e) => handleColor(e, index)}
        title={`${wheelOption.color ? 'Custom Color' : 'Auto Theme Color'}`}
        className='label-input'
        style={{
          background: `${wheelOption.color ?? 'linear-gradient(135deg, #FFF5 30%, #0005 70%)'}`,
          display: 'inline-block',
          width: '2rem',
          cursor: 'pointer',
        }}
      />
      <div onClick={() => handleAddDelete(index)}
        title={`${index === -1 ? 'Add (or press enter)' : 'Delete'}`}
        className='label-input'
        style={{
          display: 'inline-block',
          width: '2rem',
          textAlign: 'center',
          cursor: 'pointer',
        }}>
        <svg viewBox='0 0 10 10' fill='none' stroke={index === -1 ? 'green' : 'red'} strokeWidth='1.2' strokeLinecap='round'>
          {index === -1 ? <path d='M 5 2 v 6' /> : null}
          <path d='M 2 5 h 6' />
        </svg>
      </div>
    </div>
  )
}

export default LabelItem;