import React from 'react';

interface WedgeProps {
  label: string,
  angle?: number,
}

const Wedge = ({...props}: WedgeProps) => {

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: 'calc(50% - 2rem)',
        height: '2rem',
        boxSizing: 'border-box',
        transform: `rotate(${props.angle}deg) translateX(2rem)`,
        transformOrigin: 'left',
        position: 'absolute',
        
        top: 'calc(50% - 1rem)',
        left: '50%',
        textAlign: 'right',
        alignContent: 'center',
        paddingRight: '1rem',
        // writingMode: 'vertical-rl',
        // textOrientation: 'upright',
        // width: '0',
        // height: '0',
        // borderBottom: '25px solid transparent',
        // borderRight: '10rem solid #555',
        // borderTop: '25px solid transparent',
        clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
      }}>
      {props.label}
    </div>
  );
};

export default Wedge;