import { useContext } from 'react';
import { WheelContext, WheelOption } from '../contexts/WheelContext';
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeButton from './ThemeButton';

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const wheelContext = useContext(WheelContext);
  const wheelReset = () => {
    wheelContext.setData(debugOptions);
  }
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
      <button onClick={wheelReset}>dev reset</button>
    </div>
  );
};

const debugOptions: WheelOption[] = [
  {
    label: 'Becca',
    value: 1,
    color: 'hsl(325, 46%, 50%)',
  },
  {
    label: 'Rerin',
    value: 2,
  },
  {
    label: 'Sarah',
    value: 3,
  },
  {
    label: 'Chuck',
    value: 3,
  },
  {
    label: 'Ashlyn',
    value: 4,
  },
  {
    label: 'Bree',
    value: 4,
  },
  {
    label: 'Eric',
    value: 5,
  },
  {
    label: 'Cole',
    value: 5,
  },
  {
    label: 'Phil',
    value: 6,
  },
  // {
  //   label: '$1000',
  //   value: 2,
  // },
  // {
  //   label: 'Booya',
  //   value: 1,
  // },
  // {
  //   label: '🎃',
  //   value: 3,
  // },
  // {
  //   label: 'Very Nice',
  //   value: 3,
  // },
];

export default Footer;