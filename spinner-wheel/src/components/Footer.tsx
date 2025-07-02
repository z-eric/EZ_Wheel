import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeButton from './ThemeButton';

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  return(
    <div className='head-foot'
      style={{
        display: 'flex',
        backgroundColor: 'lightgray',
        marginTop: '0.5rem',
        fontSize: '100%',
      }}
    >
      <span style={{ margin: '0.5rem 0 0 0.5rem'}}>Themes</span>
      {themeContext.themes.map((theme, i) => (
        <ThemeButton theme={theme} themeIndex={i} key={i} />
      ))}
    </div>
  );
};

export default Footer;