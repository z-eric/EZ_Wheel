import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export type WheelContextType = {
  data: WheelOption[],
  setData: (value: WheelOption[]) => void,
}

export interface WheelOption{
  label: string, 
  value: number,
  color?: string,
}

export const WheelContext = createContext<WheelContextType>({
  data: [],
  setData: () => { },
});

const defaultOptions: WheelOption[] = [
  {
    label: 'Welcome',
    value: 3,
  },
  {
    label: 'Spinner',
    value: 3,
  },
  {
    label: 'EZ',
    value: 3,
  },
  {
    label: 'to',
    value: 3,
  },
]

export const WheelContextProvider = ({
  // initOptions,
  children,
}: {
  // initOptions: WheelOption[],
  children: ReactNode,
}) => {
  const [wheelData, setWheelData] = useState<WheelOption[]>(() => {
    const storage = localStorage.getItem('wheelData');
    return storage ? JSON.parse(storage) : defaultOptions;
  });
  
  useEffect(() => {
    localStorage.setItem('wheelData', JSON.stringify(wheelData));
  }, [wheelData])

  // useMemo on the context prevents the wheel from re-rendering when animated.
  const wheelContextMemo = useMemo(() => ({
    data: wheelData,
    setData: setWheelData,
  }), [wheelData]);

  return (
    <WheelContext.Provider value={wheelContextMemo}>
        {children}
    </WheelContext.Provider>
  )
}