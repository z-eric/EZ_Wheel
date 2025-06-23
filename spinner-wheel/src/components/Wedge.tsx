import React from 'react';

interface WedgeProps {
  themeClass: string,
  wheelRadius: number,
  label: string,
  angle: number,
  wedgeX: number,
  wedgeY: number,
  viewBox: number,
  color: string,
}

const Wedge = ({themeClass, wheelRadius, label, angle, wedgeX, wedgeY, viewBox, color}: WedgeProps) => {

  return (
    <>
      <div
        className={themeClass}
        style={{
          width: '100%',
          height: '100%',      
          rotate: `${angle}deg`,
          position: 'absolute',
        }}>
        <svg width='100%' height='100%' viewBox={`0 0 ${viewBox} ${viewBox}`}>
          <path
            d={`M ${viewBox / 2} ${viewBox / 2}
              l ${wedgeX} ${wedgeY}
              a ${wheelRadius} ${wheelRadius} 0 0 0 0 ${wedgeY * -2}
              Z`}
            fill={color} stroke='black' strokeWidth={'0.1'}
          />
        </svg>
      </div>
      <div
        style={{
          width: '50%',
          height: '3rem',
          rotate: `${angle + 180}deg`,
          transformOrigin: 'right',
          boxSizing: 'border-box',
          position: 'absolute',
          top: 'calc(50% - 1.5rem)',
          textShadow:
            `1px 1px 2px #eee,
            -1px -1px 2px #eee,
            1px -1px 2px #eee,
            -1px 1px 2px #eee`,
          fontSize: '150%',
          lineHeight: '3rem',
          paddingLeft: '1rem',
      }}>
        {label}
      </div>
    </>
  );
};

export default Wedge;