import { createContext, ReactNode, useEffect, useState } from "react";

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
  const [spinModifier, setSpinModifier] = useState(() => {
    const storage = localStorage.getItem('spinModifier');
    return storage ? Number.parseInt(storage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('spinModifier', spinModifier.toString());
  }, [spinModifier]);
  
  return (
    <SettingsContext.Provider value={{spinModifier, setSpinModifier}}>
      {children}
    </SettingsContext.Provider>
  )
}