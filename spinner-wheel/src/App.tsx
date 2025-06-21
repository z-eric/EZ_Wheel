import './App.css';
import MainPanel from './components/MainPanel';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { WheelContextProvider } from './contexts/WheelContext';

function App() {
  return (
    <div style={{
      display: 'flex',
      // alignItems: 'center',
      justifyContent: 'center',
    }}>
        <ThemeContextProvider>
          <WheelContextProvider>
            <MainPanel />
          </WheelContextProvider>
        </ThemeContextProvider>
    </div>
  );
};

export default App;
