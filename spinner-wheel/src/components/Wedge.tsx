import React from 'react';

interface WedgeProps {
  label: string,
  angle: number,
  wedgeX: number,
  wedgeY: number,
}

const Wedge = ({...props}: WedgeProps) => {

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',      
          transform: `rotate(${props.angle}deg)`,
          position: 'absolute',
      }}>
      
      <svg width='100%' height='100%' viewBox='0 0 10 10'>
        <path
          d={`M 5 5
            l ${props.wedgeX} ${props.wedgeY}
            a 4.5 4.5 0 0 0 0 ${props.wedgeY * -2}
            Z`}
          fill='blue' stroke='black' strokeWidth={'0.05'}
          />
        </svg>
      </div>
      <div
        style={{
          width: '50%',
          height: '100%',
          transform: `rotate(${props.angle}deg)`,
          transformOrigin: 'left',
          boxSizing: 'border-box',
          position: 'absolute',
          left: '50%',
          textAlign: 'right',
          fontSize: '150%',
          alignContent: 'center',
          paddingRight: '2rem',
          // textOrientation: 'upright',
          // writingMode: 'vertical-lr',
      }}>
      {props.label}
      </div>
    </>
  );
};

export default Wedge;