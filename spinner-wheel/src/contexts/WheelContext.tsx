import { createContext, ReactNode, useMemo, useState } from "react";

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

export const WheelContextProvider = ({
  // initOptions,
  children,
}: {
  // initOptions: WheelOption[],
  children: ReactNode,
}) => {
  const [wheelData, setWheelData] = useState<WheelOption[]>([{label: '', value: 0,}]);

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