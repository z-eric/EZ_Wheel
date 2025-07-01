import { MouseEvent, useEffect, useState } from "react";

interface ColorPickerProps {
  index: number;
  label: string;
  color: string;
  top: number;
  left: number;
  onSelect: (index: number, color: string | undefined) => void;
}

const ColorPicker = ({ index, label, color, top, left, onSelect }: ColorPickerProps) => {

  const [hue, setHue] = useState<number>();
  const [sat, setSat] = useState<number>();
  const [lum, setLum] = useState<number>();

  // determine location of click on the color selectors
  const handleHueClick = (e: MouseEvent<HTMLCanvasElement>) => {
    setHue(2 * (e.clientX - e.currentTarget.getBoundingClientRect().x));
  }
  const handleSatClick = (e: MouseEvent<HTMLCanvasElement>) => {
    setSat(((e.clientX - e.currentTarget.getBoundingClientRect().x) - 10) / 2);
  }
  const handleLumClick = (e: MouseEvent<HTMLCanvasElement>) => {
    setLum(((e.clientX - e.currentTarget.getBoundingClientRect().x) - 10) / 2);
  }

  // initial color on panel when displayed
  useEffect(() => {
    if (color.charAt(0) !== 'X') {
      setHue(Number.parseInt(color.slice(4, color.indexOf(','))));
      setSat(Number.parseInt(color.slice(color.indexOf(',') + 2, color.indexOf('%'))));
      setLum(Number.parseInt(color.slice(color.indexOf('%') + 2, color.length - 2)));
    }
    else {
      setHue(Math.floor(Math.random() * 360));
      setSat(100);
      setLum(50);
    }
  }, [color])
  
  // draw the color selector canvases
  useEffect(() => {
    const hueCanvas = document.getElementById('hueCanvas') as HTMLCanvasElement;
    const hueCtx = hueCanvas.getContext('2d') as CanvasRenderingContext2D;
    for (let x = 0; x < 180; x++){
      hueCtx.fillStyle = `hsl(${x * 2} 100 50)`;
      hueCtx.fillRect(x, 0, 1, 30);
    }
  })
  useEffect(() => {
    const satCanvas = document.getElementById('satCanvas') as HTMLCanvasElement;
    const satCtx = satCanvas.getContext('2d') as CanvasRenderingContext2D;
    for (let x = 0; x < 180; x++){
      satCtx.fillStyle = `hsl(${hue} ${x * .5 + 10} 50)`;
      satCtx.fillRect(x, 0, 1, 20);
    }
  },[hue])
  useEffect(() => {
    const lumCanvas = document.getElementById('lumCanvas') as HTMLCanvasElement;
    const lumCtx = lumCanvas.getContext('2d') as CanvasRenderingContext2D;
    for (let x = 0; x < 180; x++){
      lumCtx.fillStyle = `hsl(${hue} ${sat} ${x * .5 + 10})`;
      lumCtx.fillRect(x, 0, 1, 20);
    }
  },[hue, sat])

  return (
    <div
      style={{
        position: 'fixed',
        width: 'min-content',
        top: `calc(${top}px - 1rem)`,
        left: `${left}px`,
        translate: '-110% 0',
        backgroundColor: 'white',
        border: '2px solid black',
        borderRadius: '1rem',
        padding: '0.5rem',
    }}>
      <b>{label}</b><br />
      <div className='color-picker-button'
        onClick={() => onSelect(index, undefined)}
        style={{
          float: 'left',
          width: '4rem',
          height: '2rem',
          margin: '0.5rem 0',
          background: 'linear-gradient(135deg, #FFF5 30%, #0005 70%)',
          lineHeight: '2rem',
        }}>
        Reset
      </div>
      <div className='color-picker-button'
        onClick={() => onSelect(-2,'')}
        style={{
          float: 'right',
          width: '4rem',
          height: '2rem',
          margin: '0.5rem 0',
          lineHeight: '2rem',
        }}>
        Cancel
      </div>
      <canvas id='hueCanvas' onClick={handleHueClick} width='180' height='30'></canvas>
      <canvas id='satCanvas' onClick={handleSatClick} width='180' height='20'></canvas>
      <canvas id='lumCanvas' onClick={handleLumClick} width='180' height='20'></canvas>
      <div className='color-picker-button'
        onClick={() => onSelect(index, `hsl(${hue}, ${sat}%, ${lum}%)`)}
        style={{
        height: '3rem',
        backgroundColor: `hsl(${hue}, ${sat}%, ${lum}%)`,
        fontSize: '150%',
        fontWeight: 'bold',
        lineHeight: '2.8rem',
        textShadow:
          `1px 1px 2px #eee,
          -1px -1px 2px #eee,
          1px -1px 2px #eee,
          -1px 1px 2px #eee`,
        }}>
        Select
      </div>
    </div>
  )
}

export default ColorPicker;