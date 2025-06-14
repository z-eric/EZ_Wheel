import React from 'react';

interface WedgeProps {
  label: string,
  angle?: number,
  size: number,
}

const Wedge = ({...props}: WedgeProps) => {

  return (
    <div
      style={{
        backgroundColor: 'gray',
        width: '50%',
        // width: 'calc(50% - 2rem)',
        height: `${props.size}%`,
        boxSizing: 'border-box',          
        transform: `rotate(${props.angle}deg)`,                      
        // transform: `rotate(${props.angle}deg) translateX(2rem)`,
        transformOrigin: 'left',
        position: 'absolute',
        border: '1rem solid black',
        top: `calc(50% - ${props.size / 2}%)`,
        left: '50%',
        textAlign: 'right',
        alignContent: 'center',
        paddingRight: '1rem',
        clipPath: 'polygon(100% 0, 100% 100%, 0 50%)',
      }}>
      {props.label}
    </div>
  );
};

export default Wedge;