import { useState } from 'react';
import Wheel from './Wheel';

export interface WheelOption{
    label: string, 
    value: number,
}

const defaultOptions: WheelOption[] = [
  {
    label: 'Hello World',
    value: 5,
  }
]

const debugLabels: WheelOption[] = [
  {
    label: '👺',
    value: 3,
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
  // return defaultOptions;
  return debugLabels;
}

const MainPanel = () => {

  const [WheelData, setWheelData] = useState(initializeWheelData);
  return (
    <Wheel
      wheelData={WheelData}
    />
  )
}

export default MainPanel;