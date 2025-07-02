const Header = () => {
  return (
    <div className='head-foot'
      style={{
        // height: '3rem',
        backgroundColor: 'white',
        marginBottom: '0.5rem',
        padding: '0 1rem',
      }}>
      <span style={{
        fontFamily: '',
        fontSize: '3rem',
        fontStyle: 'italic',
      }}><b>EZ WHEEL</b></span>
      <i style={{
        float: 'right',
        textAlign: 'center',
        color: 'var(--secondary)',
      }}>big wedge is boredom<br />for dramatic conclusion<br />embrace the small wedge</i>
    </div>
  )
};

export default Header;