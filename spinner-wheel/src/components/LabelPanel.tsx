import { memo, useContext, useState } from "react";
import { WheelContext, WheelOption } from "../contexts/WheelContext";
import LabelItem from "./LabelItem";

const LabelPanel = memo(() => {
  const wheelContext = useContext(WheelContext);
  const [newOption, setNewOption] = useState<WheelOption>({
    label: '',
    value: 1,
    color: undefined,
  })

  const handleUpdateLabel = (text: string, index: number) => {
    if (index === -1) {
      setNewOption({ ...newOption, label: text });
    }
    else {
      let newData = wheelContext.data.slice();
      newData[index].label = text;
      wheelContext.setData(newData);
    }
  }
  const handleUpdateWeight = (weight: number, index: number) => {
    if (index === -1) {
      setNewOption({ ...newOption, value: weight });
    }
    else {
      let newData = wheelContext.data.slice();
      newData[index].value = weight;
      wheelContext.setData(newData);
    }
  }
  const handleUpdateColor = (index: number) => {
    if (index === -1) {
    }
    else {
      // TODO implement
      console.log(index);
    }
  }
  const handleAddDelete = (index: number) => {
    if (index === -1) {
      if(newOption.label !== '') {
        let newData = [...wheelContext.data, newOption];
        wheelContext.setData(newData);
        setNewOption({
          label: '',
          value: 1,
          color: undefined,
        });
      }
    }
    else {
      let newData = [...wheelContext.data.slice(0, index), ...wheelContext.data.slice(index + 1)];
      wheelContext.setData(newData);
    }
  }

  return (
    <div style={{flexDirection: 'column'}}>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <LabelItem
          wheelOption={newOption}
          index={-1} // -1 is the flag for the handle functions to work with the newOption 
          handleLabel={handleUpdateLabel}
          handleWeight={handleUpdateWeight}
          handleColor={handleUpdateColor}
          handleAddDelete={handleAddDelete}
        />
      </div>
      <div>
        {wheelContext.data.map((wheelOption, i) => (
          <LabelItem
            key={i}
            wheelOption={wheelOption}
            index={i}
            handleLabel={handleUpdateLabel}
            handleWeight={handleUpdateWeight}
            handleColor={handleUpdateColor}
            handleAddDelete={handleAddDelete}
          />
        ))}
      </div>
    </div>
  )
})

export default LabelPanel;