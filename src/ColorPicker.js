import React, { useRef, useEffect } from "react";
import styled from "styled-components";


const ColorPickerWrapper = styled.div`
  width: 16px;
  height: 16px;
  align-self: center;
  overflow: hidden;
  background:${(props) => (props.color ? props.color : "black")};
`;
const ColorInput = styled.input`
  opacity: 0;
  display: block;
  width: 32px;
  height: 32px;
  border: none;
`;
ColorInput.defaultProps = {
  type: "color"
};
const ColorPicker = (props) => {
  const ref = useRef();
  const inputRef = useRef();
  const { color, handleChange } = props;


  return (
    <ColorPickerWrapper ref={ref} color={color}>
      <ColorInput value={color} ref={inputRef} onChange={e => { handleChange("color", e.target.value) }} />
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
