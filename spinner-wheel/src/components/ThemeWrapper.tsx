import { ReactNode, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeWrapper = ({children}:{children: ReactNode}) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`${themeContext.themes[themeContext.selectedTheme].cssName}`}
      style={{
        minWidth: 'max-content',
        minHeight: 'min-content',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'var(--background)',
    }}>
      {children}
    </div>
  )
}

export default ThemeWrapper;