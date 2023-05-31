import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectPages } from "./reducers/page";
import { selectElements } from "./reducers/element";
import { updateElement, addElement } from "./reducers/element";
import ElementMaker from "./ElementMarker";

const ElementsWrapper = styled.div``;
const ElementsItem = styled.div`
  color:${(props) => (props.active ? "#5BB6FF" : "white")};
  margin-bottom : 2px;
  cursor: pointer
`;
const Elements = (props) => {
  const { pageActive, elementActive, setElementAcitve } = props;

  const elements = useSelector(selectElements)
  const elementInPage = elements.filter(item => item.page === pageActive);
  const dispath = useDispatch();

  //add element in active page
  const addElemnetEvent = () => {
    dispath(
      addElement({ page: pageActive, parent: pageActive })
    )
  }

  const updateElementEvent = (id, name) => {
    const itemIndex = elements.findIndex(item => item.id === id)
    dispath(updateElement({ ...elements[itemIndex], name: name }))
  }

  return (
    <ElementsWrapper>
      <h4>Elements</h4>
      <button onClick={addElemnetEvent}>+</button>
      {
        elementInPage.map((item) => {
          return (
            <ElementsItem key={item.id} active={item.id === elementActive} onClick={() => setElementAcitve(item.id)}>
              <ElementMaker
                value={item.name}
                handleChange={(e) => updateElementEvent(item.id, e.target.value)}
              />
            </ElementsItem>

          )
        })
      }

    </ElementsWrapper>
  );
};

export default Elements;
