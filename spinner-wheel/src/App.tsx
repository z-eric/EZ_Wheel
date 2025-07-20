import './App.css';
import './themes/themes.css';
import './styles/main.css';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { WheelContextProvider } from './contexts/WheelContext';
import MainPanel from './components/MainPanel';
import ThemeBar from './components/ThemeBar';
import Header from './components/Header';
import ThemeWrapper from './components/ThemeWrapper';

function App() {
  return (
    <ThemeContextProvider>
      <WheelContextProvider>
        <ThemeWrapper>
          <div
            style={{
              display: 'inline-block',
            }}>
            <Header/>
            <MainPanel/>
            <ThemeBar/>
          </div>
        </ThemeWrapper>
      </WheelContextProvider>
    </ThemeContextProvider>
  );
};

  

export default App;
