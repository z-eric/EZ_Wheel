import './App.css';
import MainPanel from './components/MainPanel';
import Footer from './components/Footer';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { WheelContextProvider } from './contexts/WheelContext';
import './themes/themes.css';
import './styles/main.css';
import Header from './components/Header';

function App() {
  return (
    <ThemeContextProvider>
      <WheelContextProvider>
        <div style={{
          minWidth: 'max-content',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <div
            style={{
              display: 'inline-block',
            }}>
            <Header/>
            <MainPanel/>
            <Footer/>
          </div>
        </div>
      </WheelContextProvider>
    </ThemeContextProvider>
  );
};

  

export default App;
