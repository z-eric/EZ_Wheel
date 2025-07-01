import { memo, MouseEvent, useContext, useState } from "react";
import { WheelContext, WheelOption } from "../contexts/WheelContext";
import LabelItem from "./LabelItem";
import ColorPicker from "./ColorPicker";

const MAX_INPUTS = 19;

const LabelPanel = memo(() => {
  const wheelContext = useContext(WheelContext);
  const [newOption, setNewOption] = useState<WheelOption>({
    label: '',
    value: 1,
    color: undefined,
  })
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPicker, setColorPicker] = useState({
    index: -2,
    label: '',
    color: '',
    top: 0,
    left: 0,
  })

  /** Handlers use an index to know what elements are making the call.
   * Because option inputs are generated through array.map() they have indices >= 0.
   * Therefore we can use the index -1 as a flag for an event coming from the new item input.
   * This is necessary because the new item is held in local state limbo until finalized
   * whereas the other ones are updating the context live.
   */
  const handleShowColorPicker = (event: MouseEvent<HTMLDivElement>, index: number) => {
    let top = event.clientY;
    let left = event.clientX;
    if (index === -1) {
      setColorPicker({
        index: index,
        label: newOption.label === '' ? 'New Option' : newOption.label,
        color: newOption.color ?? 'X',
        top: top,
        left: left,
      })
    }
    else {
      setColorPicker({
        index: index,
        label: wheelContext.data[index].label,
        color: wheelContext.data[index].color ?? `X${index}`, // weird fallback is to trigger random color
        top: top,
        left: left,
      })
    }
    setShowColorPicker(true);
  }

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
  const handleUpdateColor = (index: number, color: string | undefined) => {
    setShowColorPicker(false);
    if (index === -2) return; // just close dialog
    if (index === -1) {
      setNewOption({ ...newOption, color: color})
    }
    else {
      let newData = wheelContext.data.slice();
      newData[index].color = color;
      wheelContext.setData(newData);
    }
  }
  const handleAddDelete = (index: number) => {
    if (index === -1) {
      if (newOption.label !== '' // don't add blank
        && wheelContext.data.length < MAX_INPUTS) {
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
    <div className='uipanel'
      style={{
      height: '46rem',
      }}>
      {showColorPicker && <ColorPicker
        index={colorPicker.index}
        label={colorPicker.label}
        color={colorPicker.color}
        top={colorPicker.top}
        left={colorPicker.left}
        onSelect={handleUpdateColor}
      />}
      <LabelItem
        wheelOption={newOption}
        index={-1} // -1 is the flag for the handle functions to work with the newOption 
        handleLabel={handleUpdateLabel}
        handleWeight={handleUpdateWeight}
        handleColor={handleShowColorPicker}
        handleAddDelete={handleAddDelete}
      />
      <div style={{height: '1rem'}} />
      {wheelContext.data.map((wheelOption, i) => (
        <LabelItem
          key={i}
          wheelOption={wheelOption}
          index={i}
          handleLabel={handleUpdateLabel}
          handleWeight={handleUpdateWeight}
          handleColor={handleShowColorPicker}
          handleAddDelete={handleAddDelete}
        />
      ))}
    </div>
  )
})

export default LabelPanel;