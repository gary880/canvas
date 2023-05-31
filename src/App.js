import React from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import { useState } from "react";
import Canvas from "./Canvas";
import RightPanel from "./RightPanel";
import { store } from "./store";
import { Provider } from 'react-redux'

const AppWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 200px auto 200px;
  background: #232323;
  height: 100vh;
  color: white;
`;

const App = () => {
  const [pageActive, setPageActive] = useState("") //determine which page is active

  const [elementActive, setElementAcitve] = useState("") //determine which page is active

  return (
    <Provider store={store}>
      <AppWrapper>
        <LeftPanel setPageActive={setPageActive} pageActive={pageActive} setElementAcitve={setElementAcitve} elementActive={elementActive} />
        <Canvas pageActive={pageActive} elementActive={elementActive} setElementAcitve={setElementAcitve} />
        <RightPanel elementActive={elementActive}/>
      </AppWrapper>
    </Provider>
  );
};

export default App;
