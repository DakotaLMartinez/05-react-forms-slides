import React from "react";
import styled from "styled-components";
import BaseEditor from "./base-editor";
import { getCode } from "../utils";

function SoloEditor({ children, maxWidth }) {
  const code = getCode(children);

  return (
    <Wrapper maxWidth={maxWidth}>
      <BaseEditor value={code} disabled height="auto" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: rgb(0 0 0 / 50%) 0px 2px 10px 0px;
  background-color: hsl(0, 0%, 10%);
  max-width: ${props => props.maxWidth ? props.maxWidth : '750px'};
  width: 100%;
`;

export default SoloEditor;
