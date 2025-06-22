import { memo, useContext } from "react";
import { WheelContext } from "../contexts/WheelContext";
import LabelItem from "./LabelItem";

const LabelPanel = memo(() => {
  const wheelContext = useContext(WheelContext);

  const handleLabel = (text: string, index: number) => {
    let newData = wheelContext.data.slice();
    newData[index].label = text;
    wheelContext.setData(newData);
  }
  const handleWeight = (weight: number, index: number) => {
      let newData = wheelContext.data.slice();
      newData[index].value = weight;
      wheelContext.setData(newData);
  }
  const handleColor = (index: number) => {
    console.log(index);
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
          handleColor={handleColor}
        />
      ))}
    </div>
  )
})

export default LabelPanel;