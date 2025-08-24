interface SettingsModalProps {
  setShowSettings: (value: boolean) => void
}

const SettingsModal = ({ setShowSettings }: SettingsModalProps) => {

  return (
    <div style={{
      zIndex: '100',
      position: 'fixed',
      top: '0',
      width: '100%',
      height: '100%',
      background: '#fff8',
    }}>
      <div className="uipanel"
        style={{
          position: 'fixed',
          width: '80%',
          height: '20%',
          top: '20%',
          left: '10%',
          boxShadow: '0.3rem 0.3rem 1rem #000',
      }}>
        <div onClick={() => setShowSettings(false)}>
          💀
        </div>
      </div>
    </div>
  )
}

export default SettingsModal;