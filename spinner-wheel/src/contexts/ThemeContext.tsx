import { createContext, ReactNode, useMemo } from "react";
import * as thm from "../themes/themes";
import { Theme } from "../themes/themes";

export type ThemeContextType = {
  selectedTheme: number,
  themes: Theme[],
}

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: 0,
  themes: [],
});

export const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode,
}) => {
  const themeMemo = useMemo(() => ({
    selectedTheme: 0,
    themes: thm.themeList,
}), [])
  
  return (
    <ThemeContext.Provider value={themeMemo}>
      {children}
    </ThemeContext.Provider>
  )
}