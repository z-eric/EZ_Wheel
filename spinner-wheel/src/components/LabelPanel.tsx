import { useContext } from "react";
import { WheelContext } from "../contexts/WheelContext";
import LabelItem from "./LabelItem";

const LabelPanel = () => {
  const wheelContext = useContext(WheelContext);

  const handleChange = (text: string, index: number) => {
    console.log(text + ' ' + index);
    let newData = wheelContext.data.slice();
    newData[index].label = text;

    wheelContext.setData(newData);
  }

  return (
    <div>
      {wheelContext.data.map((wheelOption, i) => (
        <LabelItem wheelOption={wheelOption} index={i} handleChange={handleChange}/>
      ))}
    </div>
  )
}

export default LabelPanel;