import { WheelOption } from "../contexts/WheelContext";

interface LabelItemProps {
  wheelOption: WheelOption;
  index: number;
  handleChange: (text: string, index: number) => void;
}

const LabelItem = ({ wheelOption, index, handleChange }: LabelItemProps) => {

  return (
    <div>
      <input value={wheelOption.value} style={{width: '2em'}}></input>
      <input value={wheelOption.label} onChange={(e) => handleChange(e.target.value, index)}></input>
    </div>
  )
}

export default LabelItem;