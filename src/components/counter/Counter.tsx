import React from "react";
import {
  MainContainer,
  CounterContainer,
  StyledButton,
  Count,
} from "./CounterStyles";
const Counter = (props: {}) => {
  return (
    <MainContainer>
      <CounterContainer>
        <Count>0</Count>
        <StyledButton>Increment</StyledButton>
        <StyledButton>Decrement</StyledButton>
      </CounterContainer>
    </MainContainer>
  );
};

export default Counter;
