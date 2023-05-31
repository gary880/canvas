import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addElement, updateElement } from "./reducers/element";
import { selectElements } from "./reducers/element";
const CanvasWrapper = styled.div`
  position: relative;
  background: white;
  overflow: hidden;
`;

const Block = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  opacity: ${(props) => props.o / 100};
  background: ${(props) => props.color};
  outline: ${(props) => (props.active ? 1 : 0)}px solid #0274ff;
`;

const Canvas = (props) => {

  const dispath = useDispatch();
  const { pageActive, elementActive, setElementAcitve } = props;
  const elements = useSelector(selectElements)
  const elementInPage = elements.filter(item => item.page === pageActive);

  //cancel dragover animation
  function handleDragOver(e) {
    e.preventDefault()
  }

  //drag and drop
  const handleDrag = (e) => {
    e.preventDefault();

    //avoid return x to 0
    if (e.screenX === 0) {
      return;
    }
    const itemIndex = elements.findIndex(item => item.id === elementActive)
    dispath(updateElement({ ...elements[itemIndex], positionX: (e.clientX - 230), positionY: (e.clientY - 20) }))
  }

  return (
    <CanvasWrapper  >
      {elementInPage.map((item) => {
        return (
          <Block draggable onClick={() => setElementAcitve(item.id)} onDragOver={handleDragOver} onDrop onDrag={(e) => handleDrag(e)} key={item.id} x={item.positionX} y={item.positionY} o={item.opacity} active={item.id === elementActive} color={item.color} />
        )
      })}

    </CanvasWrapper>
  );
};

export default Canvas;
