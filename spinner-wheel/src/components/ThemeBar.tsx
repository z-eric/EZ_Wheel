import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeButton from './ThemeButton';

const ThemeBar = () => {
  const themeContext = useContext(ThemeContext);
  return(
    <div className='head-foot'
      style={{
        display: 'flex',
        backgroundColor: 'lightgray',
        marginTop: '0.5rem',
        fontSize: '100%',
        paddingLeft: '0.5rem',
      }}
    >
      {themeContext.themes.map((theme, i) => (
        <ThemeButton theme={theme} themeIndex={i} key={i} />
      ))}
      <span style={{ margin: '0.5rem 0 0 0.5rem' }}>{themeContext.themes[themeContext.selectedTheme].niceName}</span>
    </div>
  );
};

export default ThemeBar;