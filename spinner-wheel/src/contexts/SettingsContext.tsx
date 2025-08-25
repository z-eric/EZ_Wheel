import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export type SettingsContextType = {
  spinModifier: number,
  setSpinModifier: (value: number) => void,
  densityThreshold: {amount: number, enabled: boolean},
  setDensityThreshold: (value: {amount: number, enabled: boolean}) => void,
};

export const SettingsContext = createContext<SettingsContextType>({
  spinModifier: 0,
  setSpinModifier: () => { },
  densityThreshold: { amount: 0, enabled: true },
  setDensityThreshold: () => { },
});

export const SettingsContextProvider = ({
  children,
}: {
  children: ReactNode,
  }) => {
  // Spin Duration Modifier
  const [spinModifier, setSpinModifier] = useState(() => {
    const storage = localStorage.getItem('spinModifier');
    return storage ? Number.parseInt(storage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('spinModifier', spinModifier.toString());
  }, [spinModifier]);

  // Minimum Wedge Density Threshold
  const [densityThreshold, setDensityThreshold] = useState(() => {
    const storage = localStorage.getItem('densityThreshold');
    return storage ? JSON.parse(storage) : { amount: 20, enabled: true };
  });

  useEffect(() => {
    localStorage.setItem('densityThreshold', JSON.stringify(densityThreshold));
  }, [densityThreshold]);

  const densityThresholdMemo = useMemo(() => ({
    densityThreshold: densityThreshold,
  }), [densityThreshold]);
  
  return (
    <SettingsContext.Provider
      value={{
        spinModifier,
        setSpinModifier,
        densityThreshold: densityThresholdMemo.densityThreshold,
        setDensityThreshold,
      }}>
      {children}
    </SettingsContext.Provider>
  )
}