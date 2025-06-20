import { WheelOption } from "../contexts/WheelContext";

interface LabelItemProps {
  wheelOption: WheelOption;
  index: number;
  handleLabel: (text: string, index: number) => void;
  handleWeight: (weight: string, index: number) => void;
}

const LabelItem = ({ wheelOption, index, handleLabel, handleWeight }: LabelItemProps) => {

  return (
    <div>
      <input value={wheelOption.value} onChange={(e) => handleWeight(e.target.value, index)} style={{width: '2em'}}></input>
      <input value={wheelOption.label} onChange={(e) => handleLabel(e.target.value, index)}></input>
    </div>
  )
}

export default LabelItem;