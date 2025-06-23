import { useContext, useState } from 'react';
import WheelSpinner from './WheelSpinner';
import LabelPanel from './LabelPanel';
import { WheelContext, WheelOption } from '../contexts/WheelContext';
import { ThemeContext } from '../contexts/ThemeContext';
import '../themes/themes.css';

// const DEBUG_MODE = true;

const debugOptions: WheelOption[] = [
  {
    label: '👺',
    value: 1,
    color: '#ba458a',
  },
  {
    label: '🤗',
    value: 3,
  },
  {
    label: '3️⃣',
    value: 3,
  },
  {
    label: '💀',
    value: 2,
  },
  {
    label: '🟩',
    value: 3,
  },
  {
    label: '------',
    value: 4,
  },
  {
    label: 'Hello',
    value: 3,
  },
  {
    label: '🎄✨✨🎄',
    value: 1,
  },
  {
    label: '🐈',
    value: 2,
  },
  // {
  //   label: '$1000',
  //   value: 2,
  // },
  // {
  //   label: 'Booya',
  //   value: 1,
  // },
  // {
  //   label: '🎃',
  //   value: 3,
  // },
  // {
  //   label: 'Very Nice',
  //   value: 3,
  // },
];

const MainPanel = () => {
  const themeContext = useContext(ThemeContext);
  const wheelContext = useContext(WheelContext);
  // const [wheelData, setWheelData] = useState(initializeWheelData);
  const [isActive, setIsActive] = useState(false);
  const [winningLocation, setWinningLocation] = useState(0);

  const isActiveSetter = (active: boolean) => {
    setIsActive(active);
  };

  const winningLocationSetter = (location: number) => {
    // console.log('location ' + location)
    setWinningLocation(location);
  };

  // const parseThemes = () => {
  //   getComputedStyle(document.documentElement).g
  // }

  
  const wheelReset = () => {
    wheelContext.setData(debugOptions);
  }

  return (
    <>
      <button onClick={wheelReset}>dev reset</button>
      <div
        // WheelPanel
        style={{
          position: 'relative',
          width: '40rem',
          height: '40rem'
        }}
      >
        <div style={{
          overflow: 'clip',
          position: 'relative',
        }}>
          <WheelSpinner
            isActive={isActive}
            isActiveSetter={isActiveSetter}
            winningLocationSetter={winningLocationSetter}
          />
        </div>
        <div
          // WheelCenter
        >
          <svg
            className='default' // TODO dynamic theme
            width='6rem' height='9rem' viewBox='0 0 10 10'
            style={{
              position: 'absolute',
              top: 'calc(50% - 4.5rem)',
              left: 'calc(50% - 3rem)',
              rotate: '225deg',
          }}>
            <circle cx='50%' cy='50%' r='45%' fill='var(--primary)' stroke='black' strokeWidth='0.2' />
            {/* <path
              d='M 12.5 5
                L 6 2 
                a 3.2 3.2 0 1 0 0 6 
                Z'
              fill='var(--primary)' stroke='black' strokeWidth='0.2'
            /> */}
            <path
              d='M 5 -2.5
                L 2 4 
                a 3.2 3.2 0 1 0 6 0 
                Z'
              fill='var(--primary)' stroke='black' strokeWidth='0.2'
            />
          </svg>
        </div>
        <div
          // WheelPointer
          // TODO pull out into component to allow wiggle?
        >
          <svg
            className='default' // TODO dynamic theme
            width='9rem' height='6rem' viewBox='0 0 10 10'
            style={{
              // opacity: '50%',
              position: 'absolute',
              // height: '1px',
              // width: '15rem',
              top: 'calc(85% - 3rem)',
              right: 'calc(85% - 4.5rem)',
              rotate: '135deg',
              // backgroundColor: 'green',
              zIndex: '10',
            }}
          >
            <path
              d='M 0 5
                L 7 2 
                a 3.2 3.2 0 1 1 0 6 
                Z'
              fill='var(--primary)' stroke='black' strokeWidth='0.2'
            />
          </svg>
        </div>
      </div>
      <p style={{position: 'absolute', top: '2em', left: '0'}}>Winner {wheelContext.data[winningLocation].label}</p>
      <LabelPanel />
    </>
  );
}

export default MainPanel;