import { useState } from 'react';
import WheelSpinner from './WheelSpinner';
import LabelPanel from './LabelPanel';
import { WheelContextProvider, WheelOption } from '../contexts/WheelContext';

const DEBUG_MODE = true;

const defaultOptions: WheelOption[] = [
  {
    label: 'Hello World',
    value: 5,
  }
]

const debugOptions: WheelOption[] = [
  {
    label: '👺',
    value: 1,
  },
  {
    label: '🤗',
    value: 3,
  },
  {
    label: '3️⃣',
    value: 10,
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
    value: 10,
  },
  {
    label: 'Hello',
    value: 3,
  },
];

const initializeWheelData = () => {
  return DEBUG_MODE ? debugOptions : defaultOptions;
}

const MainPanel = () => {

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

  return (
    <WheelContextProvider initOptions={initializeWheelData()}>
      <div style={{
        // position: 'absolute',
      }}>
        <WheelSpinner
          isActive={isActive}
          isActiveSetter={isActiveSetter}
          winningLocationSetter={winningLocationSetter}
        />
      </div>
      <div style={{
        position: 'absolute',
        height: '1px',
        width: '15rem',
        top: '15rem',
        left: '50%',
        backgroundColor: 'red',
        zIndex: '10',
      }}/>
      {/* <p style={{position: 'absolute', top: '2em', left: '0'}}>Winner {wheelData[winningLocation].label}</p> */}
      <LabelPanel />
    </WheelContextProvider>
  )
}

export default MainPanel;