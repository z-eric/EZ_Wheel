import { useContext } from "react";
import { WheelDataContext } from "../contexts/WheelDataContext";

const LabelPanel = () => {
  const wheelData = useContext(WheelDataContext);

  return (
    <div>
      {wheelData[0].label}
    </div>
  )
}

export default LabelPanel;