import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`head-foot ${themeContext.themes[themeContext.selectedTheme].cssName}`}
      style={{
        height: '3rem',
        marginBottom: '0.5rem',
              
      }}>
      HEADER TITLE
    </div>
  )
};

export default Header;