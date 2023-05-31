import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import { useDispatch, useSelector } from "react-redux";
import { selectElements, updateElement } from "./reducers/element";
const RightPanelWrapper = styled.div`
  padding: 8px;
`;
const Label = styled.label`
  display: grid;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`;



const RightPanel = (props) => {

  const { elementActive } = props;
  const elements = useSelector(selectElements)
  const dispath = useDispatch();
  const updateElementEvent = (option, value) => {
    const itemIndex = elements.findIndex(item => item.id === elementActive)
    dispath(updateElement({ ...elements[itemIndex], [option]: value }))
  }

  const [elementIndex, setElementIndex] = useState(null)


  useEffect(() => {
    const itemIndex = elements?.findIndex(item => item.id === elementActive)
    setElementIndex(itemIndex)
  }, [elementActive, elements])

  const handleChange = (option, value) => {
    switch (option) {
      case "positionX":
        updateElementEvent("positionX", value)
        break;
      case "positionY":
        updateElementEvent("positionY", value)
        break;
      case "opacity":
        updateElementEvent("opacity", value)
        break;
      case "color":
        updateElementEvent("color", value)
        break;
    }
  }

  return (
    <RightPanelWrapper>
      <Label>
        X <input type="number" min={0} max={999} value={elements[elementIndex]?.positionX} onChange={(e) => handleChange("positionX", e.target.value)} />
      </Label>
      <Label>
        Y <input type="number" min={0} max={999} value={elements[elementIndex]?.positionY} onChange={(e) => handleChange("positionY", e.target.value)} />
      </Label>
      <Label>
        O <input type="number" min={0} max={100} value={elements[elementIndex]?.opacity} onChange={(e) => handleChange("opacity", e.target.value)} />
        <input type="range" min={0} max={100} value={elements[elementIndex]?.opacity} onChange={(e) => handleChange("opacity", e.target.value)} />
      </Label>
      <Label>
        B <ColorPicker color={elements[elementIndex]?.color} handleChange={handleChange} /> {elements[elementIndex]?.color}
      </Label>
    </RightPanelWrapper>
  );
};

export default RightPanel;
