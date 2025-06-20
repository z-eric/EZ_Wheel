import { useContext } from "react";
import { WheelContext } from "../contexts/WheelContext";
import LabelItem from "./LabelItem";

const LabelPanel = () => {
  const wheelContext = useContext(WheelContext);

  const handleChange = (
    text: string | null,
    weight: number,
    index: number,
  ) => {
    console.log(text + ' ' + weight + ' ' + index);
    let newData = wheelContext.data.slice();
    if (text != null) newData[index].label = text;
    if (weight >= 0) newData[index].value = weight;
    wheelContext.setData(newData);
  }

  const handleLabel = (text: string, index: number) => {
    handleChange(text, -1, index);
  }
  const handleWeight = (weight: string, index: number) => {
    handleChange(null, weight === '' ? 0 : Number.parseInt(weight), index);
  }

  return (
    <div>
      {wheelContext.data.map((wheelOption, i) => (
        <LabelItem
          key={i}
          wheelOption={wheelOption}
          index={i}
          handleLabel={handleLabel}
          handleWeight={handleWeight}
        />
      ))}
    </div>
  )
}

export default LabelPanel;