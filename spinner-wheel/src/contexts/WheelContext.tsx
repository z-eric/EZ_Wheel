import { createContext, ReactNode, useMemo, useState } from "react";
import * as thm from "../themes/themes";
import { Theme } from "../themes/themes";

export type WheelContextType = {
  data: WheelOption[],
  themes: Theme[],
  setData: (value: WheelOption[]) => void,
}

export interface WheelOption{
  label: string, 
  value: number,
  color?: string,
}

export const WheelContext = createContext<WheelContextType>({
  data: [],
  themes: [],
  setData: () => { },
});

export const WheelContextProvider = ({
  initOptions,
  children,
}: {
  initOptions: WheelOption[],
  children: ReactNode,
}) => {
  const [wheelData, setWheelData] = useState<WheelOption[]>(initOptions);
  const themes = useMemo<Theme[]>(() => ([
    thm.defaultTheme,
  ]), [])

  // useMemo on the context prevents the wheel from re-rendering when animated.
  const wheelContextMemo = useMemo(() => ({
    data: wheelData,
    themes: themes,
    setData: setWheelData,
  }), [wheelData, themes]);

  return (
    <WheelContext.Provider value={wheelContextMemo}>
        {children}
    </WheelContext.Provider>
  )
}