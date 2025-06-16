import { useState } from 'react';
import WheelSpinner from './WheelSpinner';

export interface WheelOption{
    label: string, 
    value: number,
}

const DEBUG_MODE = true;

const defaultOptions: WheelOption[] = [
  {
    label: 'Hello World',
    value: 5,
  }
]

const debugLabels: WheelOption[] = [
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
    value: 3,
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
  return DEBUG_MODE ? debugLabels : defaultOptions;
}

const MainPanel = () => {

  const [wheelData, setWheelData] = useState(initializeWheelData);
  const [isActive, setIsActive] = useState(false);
  const [winningLocation, setWinningLocation] = useState(0);

  const isActiveSetter = (active: boolean) => {
    setIsActive(active);
  };
  const winningLocationSetter = (location: number) => {
    setWinningLocation(location);
  };

  return (
    <WheelSpinner
      wheelData={wheelData}
      isActive={isActive}
      isActiveSetter={isActiveSetter}
      winningLocationSetter={winningLocationSetter}
    />
  )
}

export default MainPanel;