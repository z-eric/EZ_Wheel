import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Theme } from "../themes/themes";

interface ThemeButtonProps{
  theme: Theme;
  themeIndex: number,
}

const ThemeButton = ({theme, themeIndex}: ThemeButtonProps) => {
  const themeContext = useContext(ThemeContext);

  const selectTheme = () => {
    themeContext.setSelectedTheme(themeIndex);
  }

  return (
    <div className={`${theme.cssName}`}
      onClick={selectTheme}
      style={{
        cursor: 'pointer',
        background: `linear-gradient(135deg, var(--primary) ${theme.isCSS ? '50' : '30'}%, var(--secondary) ${theme.isCSS ? '50' : '70'}%`,
        display: 'inline-block',
        width: '3rem',
        height: '2rem',
        border: '2px solid gray',
        borderRadius: '1rem',
        margin: '0.2rem 0 0.2rem 0.2rem',
      }}>
        
    </div>
  )
}

export default ThemeButton;