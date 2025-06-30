import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import * as thm from "../themes/themes";
import { Theme } from "../themes/themes";

export type ThemeContextType = {
  selectedTheme: number,
  setSelectedTheme: (value: number) => void,
  themes: Theme[],
}

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: 0,
  setSelectedTheme: () => { },
  themes: [],
});

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode,
  }) => {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const storage = localStorage.getItem('selectedTheme');
    return storage ? Number.parseInt(storage) : 0;
  });

  useEffect(() => {
    localStorage.setItem('selectedTheme', selectedTheme.toString());
  }, [selectedTheme])

  const themeMemo = useMemo(() => ({
    selectedTheme: selectedTheme,
    setSelectedTheme: setSelectedTheme,
    themes: thm.themeList,
}), [selectedTheme])
  
  return (
    <ThemeContext.Provider value={themeMemo}>
      {children}
    </ThemeContext.Provider>
  )
}