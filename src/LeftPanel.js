import React from "react";
import styled from "styled-components";
import Pages from "./Pages";
import Elements from "./Elements";

const LeftPanelWrapper = styled.div`
  padding: 8px;
`;
const LeftPanel = (props) => {
  const { setPageActive, pageActive, setElementAcitve, elementActive } = props;
  return (
    <LeftPanelWrapper>
      <Pages setPageActive={setPageActive} pageActive={pageActive} />
      <Elements pageActive={pageActive} setElementAcitve={setElementAcitve} elementActive={elementActive} />
    </LeftPanelWrapper>
  );
};

export default LeftPanel;
