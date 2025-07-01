import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
import WheelSpinner, { WheelSpinRef } from './WheelSpinner';
import LabelPanel from './LabelPanel';
import { WheelContext } from '../contexts/WheelContext';

  
const MainPanel = () => {
  const wheelContext = useContext(WheelContext);
  const [isActive, setIsActive] = useState(false);
  const [winningText, setWinningText] = useState('');
  const [showWinner, setShowWinner] = useState(false);

  const isActiveSetter = (active: boolean) => {
    setIsActive(active);
  };

  const winningLocationSetter = (location: number) => {
    setWinningText(wheelContext.data[location].label);
    setShowWinner(true);
  };

  const handleClickSpin = () => {
    setShowWinner(false);
    spinRef.current?.startSpin();
  }

  useEffect(() => {
    setShowWinner(false);
  }, [wheelContext.data])

  const spinRef = useRef<WheelSpinRef>(null);

  const starGenerator = (num: number) => {
    let stars: ReactElement[] = [];
    for (let i = 0; i < num; i++){
      stars.push(
        <path
          key={i}
          fill='var(--primary)' style={{ translate: '0 -0.75px' }}
          d='M 0 0
          L .6 1.9
          L -.9 .6
          L .9 .6
          L -.6 1.9
          Z'>
          <animateTransform
            type='rotate'
            attributeName='transform'
            attributeType='XML'
            from='0 0 .84'
            to='360 0 .84'
            dur={`${Math.random() + 1}s`}
            repeatCount='indefinite'
          />
          <animateMotion dur='5s' repeatCount='indefinite' rotate='auto' begin={`${i*0.2}s`}>
            <mpath href='#winnerArch'/>
          </animateMotion>
        </path>
      )
    }
    return stars
  }

  return (
      <div style={{ display: 'flex' }}>
        <div className='uipanel'
          // Wheel Background
          style={{
            position: 'relative',
            width: '46rem',
            // minWidth: '46rem',
            height: '46rem',
          }}
        >
          <svg viewBox='0 0 46 46'>
            <path // bottom  block
              stroke='black' strokeWidth='0.2' fill='var(--background)'
              d='M 1 45
              L 1 30
              L 45 30
              L 45 45
              Z'/></svg>
          <div style={{
            pointerEvents: 'none',
            overflow: 'clip',
            position: 'absolute',
            width: '36rem',
            height: '36rem',
            top: 'calc(50% - 18rem)',
            left: 'calc(50% - 18rem)',
          }}>
            <WheelSpinner
              isActiveSetter={isActiveSetter}
              winningLocationSetter={winningLocationSetter}
              ref={spinRef}
            />
          </div>
          <svg  // Wheel frame
            width='46rem' height='46rem'
            viewBox='0 0 46 46'
            fill='var(--secondary)'
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              top: 'calc(50% - 23rem)',
              left: 'calc(50% - 23rem)',
            }}
          >
            <path id='winnerArch' fill='none' stroke='black' strokeWidth='3'
              d='M 3.5 35
              L 3.5 23
              A 19.5 19.5 0 0 1 42.5 23
              L 42.5 35'/>
            <path fill='none' stroke='var(--background)' strokeWidth='2.5'
              d='M 3.5 35
              L 3.5 23
              A 19.5 19.5 0 0 1 42.5 23
              L 42.5 35'/>
            {showWinner && starGenerator(25)}
            {/* {showWinner && <path  // Star
              fill='var(--primary)' style={{ translate: '0 -0.75px' }}
              d='M 0 0
              L .6 1.9
              L -.9 .6
              L .9 .6
              L -.6 1.9
              Z'>
              <animateTransform
                type='rotate'
                attributeName='transform'
                attributeType='XML'
                from='0 0 .84'
                to='360 0 .84'
                dur='2s'
                repeatCount='indefinite'
              />
              <animateMotion dur='5s' repeatCount='indefinite' rotate='auto' begin='0.5s'>
                <mpath href='#winnerArch'/>
              </animateMotion>
            </path>} */}
            {/* <path  // winner panel single arc method
              stroke='white' strokeWidth='5' strokeLinecap='round' fill='none'
              d='M 13 6
              A 19.5 19.5 0 0 1 33 6'
              /> */}
            <path  // winner panel
              stroke='var(--primary)' strokeWidth='.5'
              d='M 12 4
              A 22 22 0 0 1 34 4
              A 2 2 0 0 1 32 8.5
              A 18 18 0 0 0 14 8.5
              A 2 2 0 0 1 12 4'
              />
            <text  // winner text
              className='winner-text'
              fill='white'
              style={{
                fontWeight: 'bold',
                fontSize: `${winningText.length < 15 ? 3 : 2}`,
                dominantBaseline: 'central',
                textAlign: 'center',
                baselineShift: '0.15',
              }}>
              <textPath href='#winnerArch' startOffset='50%' textAnchor='middle'>
                {showWinner && winningText}
              </textPath>
            </text>
            <path // bottom left block
              stroke='black' strokeWidth='0.2'
              d='M 1 45
              L 1 30
              L 6 30
              A 18 18 0 0 0 20 41
              L 20 41
              L 20 45
              Z'/>
            <path // bottom right block
              stroke='black' strokeWidth='0.2'
              d='M 45 45
              L 45 30
              L 40 30
              A 18 18 0 0 1 26 41
              L 26 45
              Z'/>
          </svg>
          <svg  // Wheel pointer
            width='16rem' height='8rem' viewBox='0 0 10 10'
            style={{
              position: 'absolute',
              top: 'calc(82% - 4rem)',
              left: 'calc(18% - 8rem)',
              rotate: '135deg',
              zIndex: '10',
            }}
          >
            <path fill='none' stroke='white' strokeWidth='0.4'
              d='M 0 5
                L 7 2 
                a 3.2 3.2 0 1 1 0 6 
                Z'
            />
            <path fill='var(--primary)' stroke='black' strokeWidth='0.15'
              d='M 0 5
                L 3.5 3.5
                L 7 2 
                L 5 5
                L 3.5 6.5
                Z'
            />
            <path fill='var(--primary)' stroke='black' strokeWidth='0.15'
              d='M 5 5
                L 3.5 3.5
                L 7 2 
                a 3.2 3.2 0 1 1 0 6
                L 3.5 6.5
                Z'
            />
          </svg>
          <svg  // Wheel center
            width='8rem' height='16rem'
            viewBox='0 0 10 10'
            fill='var(--primary)'
            stroke='black'
            strokeWidth='0.1'
            style={{
              position: 'absolute',
              top: 'calc(50% - 8rem)',
              left: 'calc(50% - 4rem)',
              rotate: '225deg',
          }}>
            <path
              d='M 5 -2.5
                L 2 4 
                a 3.2 3.2 0 1 0 6 0 
                Z'
            />
          </svg>

          <svg  // Spin button
            width='14rem' height='14rem'
            viewBox='0 0 14 14'
            style={{
              pointerEvents: 'auto',
              position: 'absolute',
              bottom: '0',
              right: '0',
          }}>
            <path fill='none' stroke='white' strokeWidth='0.3'
              d='M 7 3
              A 2.8 5 25 0 1 12 4
              A 9 9 0 0 1 4 12
              A 2.8 5 -115 0 1 3 7
              A 19 19 0 0 0 7 3'
            />
            <path
              onClick={() => { !isActive && handleClickSpin() }}
              fill={isActive ? 'var(--secondary)' : 'var(--primary)'} stroke='black' strokeWidth='0.15'
              style={{ cursor: 'pointer' }}
              d='M 7 3
              A 2.8 5 25 0 1 12 4
              A 9 9 0 0 1 4 12
              A 2.8 5 -115 0 1 3 7
              A 19 19 0 0 0 7 3'
            />
            <path fill='none' id='spinText' d='M 3 10 A 18 18 0 0 0 10 3' />
            <text style={{
              pointerEvents: 'none',
              fontSize: '4',
              baselineShift: '-1.5',
            }}>
              <textPath href='#spinText' startOffset='50%' textAnchor='middle'>
              SPIN
              </textPath>
            </text>
            </svg>
        </div>
        <LabelPanel />
      </div>
  );
}

export default MainPanel;