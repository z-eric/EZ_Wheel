import React from 'react';

interface WedgeProps {
  wheelRadius: number,
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
      
        <svg width='100%' height='100%' viewBox={`0 0 ${props.wheelRadius * 2} ${props.wheelRadius * 2}`}>
          <path
            d={`M ${props.wheelRadius} ${props.wheelRadius}
              l ${props.wedgeX} ${props.wedgeY}
              a ${props.wheelRadius} ${props.wheelRadius} 0 0 0 0 ${props.wedgeY * -2}
              Z`}
            fill='turquoise' stroke='black' strokeWidth={'0.1'}
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
          paddingRight: '5%',
          // textOrientation: 'upright',
          // writingMode: 'vertical-lr',
      }}>
        {props.label}
      </div>
    </>
  );
};

export default Wedge;