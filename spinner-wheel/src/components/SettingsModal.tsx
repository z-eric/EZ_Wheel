import { useContext, useEffect, useState } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

interface SettingsModalProps {
  setShowSettings: (value: boolean) => void
}

const SettingsModal = ({ setShowSettings }: SettingsModalProps) => {
  const settingsContext = useContext(SettingsContext);

  const [spinValue, setSpinValue] = useState(settingsContext.spinModifier / 1000 + 6);
  useEffect(() => {
    settingsContext.setSpinModifier((spinValue - 6) * 1000);
  })

  const handleResetAll = () => {
    setSpinValue(6);
    settingsContext.setDensityThreshold({ amount: 20, enabled: true });
  }

  return (
    <div style={{
      zIndex: '100',
      position: 'fixed',
      top: '0',
      width: '100%',
      height: '100%',
      background: '#fff8',
    }}>
      <div // Close when clicking outside the modal dialog
        style={{ width: '100%', height: '100%' }}
        onClick={() => setShowSettings(false)}
      />
      <div className="uipanel"
        style={{
          position: 'fixed',
          width: '30rem',
          top: '20%',
          left: '50%',
          translate: '-50% 0',
          boxShadow: '0.3rem 0.3rem 1rem #000',
      }}>
        <div style={{display: 'flex', margin: '0.5rem 0.5rem 0 1rem'}}>
          <div style={{ flexGrow: '1' }}>
            <b>Settings</b>
          </div>
          <div // Close button
            style={{
            display: 'inline-block',
            width: '2rem',
            cursor: 'pointer',
          }}
            onClick={() => setShowSettings(false)}
          >
            <svg viewBox='0 0 10 10' fill='none' stroke='black' strokeWidth='1.2' strokeLinecap='round'>
              <path d='M 3 3 L 7 7' />
              <path d='M 7 3 L 3 7' />
            </svg>
          </div>
        </div>
        <div className="setting-row">
          <label htmlFor="duration">Spin Duration</label>
          <input
            style={{ accentColor: 'var(--primary)' }}
            id="duration"
            type="range"
            min="6"
            max="20"
            value={spinValue}
            onChange={(e) => setSpinValue(Number.parseInt(e.target.value))}
          />
          <span>~{spinValue} seconds</span>
        </div>
        <div className="setting-row">
          <label htmlFor="density">Minimum Wedges</label>
          <input
            style={{ accentColor: 'var(--primary)' }}
            id="density"
            type="range"
            min="10"
            max="30"
            value={settingsContext.densityThreshold.amount}
            onChange={(e) => settingsContext.setDensityThreshold(
              {
                ...settingsContext.densityThreshold,
                amount: Number.parseInt(e.target.value),
              }
            )}
          />
          <span>{settingsContext.densityThreshold.amount} wedges</span>
        </div>
        <div className="setting-row">
          <label htmlFor="densityToggle">Minimum Wedges</label>
          <input
            style={{ accentColor: 'var(--primary)' }}
            id="densityToggle"
            type="checkbox"
            checked={settingsContext.densityThreshold.enabled}
            onChange={(e) => settingsContext.setDensityThreshold(
              {
                ...settingsContext.densityThreshold,
                enabled: e.target.checked,
              }
            )}
          />
          <span>{settingsContext.densityThreshold.enabled ? 'ON' : 'OFF'}</span>
        </div>
        <br/>
        <div className="setting-row">
          <label>Reset All</label>
          <input type="button" value="Reset all settings to default" onClick={handleResetAll}/>
          <span/>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal;