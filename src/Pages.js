import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addPage, selectPages, updatePage } from "./reducers/page";
import ElementMaker from "./ElementMarker";

const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`;
const PagesItem = styled.div`
  color:${(props) => (props.active ? "#5BB6FF" : "white")};
  margin-bottom : 2px;
  cursor: pointer
`;
const Pages = (props) => {
  const pages = useSelector(selectPages)
  const { setPageActive, pageActive } = props;


  const dispath = useDispatch();
  const addPageEvent = () => {
    dispath(
      addPage(),
    )
  }
  const updatePageEvent = (id, name) => {
    const itemIndex = pages.findIndex(item => item.id === id)
    dispath(updatePage({ ...pages[itemIndex], name: name }))
  }
  useEffect(() => {
    setPageActive(pages[0].id)
  }, [])
  return (
    <PagesWrapper>
      <h4>Page</h4>
      <button onClick={() => addPageEvent()}>+</button>
      <div>
        {pages.map((item) => {
          return (
            <PagesItem key={item.id} active={item.id === pageActive} onClick={() => setPageActive(item.id)}>
              <ElementMaker
                value={item.name}
                handleChange={(e) => updatePageEvent(item.id, e.target.value)}
              />
            </PagesItem>
          )
        })}
      </div>
    </PagesWrapper>
  );
};

export default Pages;
