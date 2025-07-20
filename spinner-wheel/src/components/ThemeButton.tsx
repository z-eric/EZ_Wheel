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
      title={`${theme.niceName}`}
      style={{
        cursor: 'pointer',
        background: `linear-gradient(146deg, var(--highlight) ${theme.isCSS ? '49' : '30'}%, var(--secondary) ${theme.isCSS ? '52' : '70'}%`,
        display: 'inline-block',
        width: '3rem',
        height: '2rem',
        border: '2px solid gray',
        borderRadius: '1rem 0 1rem 0',
        margin: '0.2rem 0 0.2rem 0.2rem',
        textAlign: 'center',
      }}>
      <div style={{
        display: 'inline-block',
        background: `${theme.isCSS
          ? 'conic-gradient(var(--wedge0) 119deg, var(--wedge1) 121deg 239deg, var(--wedge2) 241deg)'
          : theme.cssName === 'autoRainbow'
            ? `conic-gradient(hsl(0 80% 50%) 0deg, hsl(60 80% 50%) 60deg, hsl(120 80% 50%) 120deg, hsl(180 80% 50%) 180deg, hsl(240 80% 50%) 240deg, hsl(300 80% 50%) 300deg, hsl(0 80% 50%) 360deg)`
            : `conic-gradient(hsl(${theme.hues?.[0]} 80% ${theme.lightLevel ?? 90}%), hsl(${theme.hues?.[0]} 80% ${(theme.lightLevel ?? 90) - (50 / (theme.hues?.length ?? 1))}%) )`}`,
        width: '2rem',
        height: '2rem',
        boxSizing: 'border-box',
        border: '1px solid black',
        borderRadius: '1rem',
      }} />
    </div>
  )
}

export default ThemeButton;