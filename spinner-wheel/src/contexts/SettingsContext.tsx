import { createContext, ReactNode, useState } from "react";

export type SettingsContextType = {
  spinModifier: number,
  setSpinModifier: (value: number) => void,
};

export const SettingsContext = createContext<SettingsContextType>({
  spinModifier: 0,
  setSpinModifier: () => { },
});

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode,
  }) => {
  const [spinModifier, setSpinModifier] = useState(0);
  
  return (
    <SettingsContext.Provider value={{spinModifier, setSpinModifier}}>
      {children}
    </SettingsContext.Provider>
  )
}