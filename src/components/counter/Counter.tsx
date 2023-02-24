import { values } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import {
  MainContainer,
  CounterContainer,
  StyledButton,
  Count,
} from "./CounterStyles";
import CountStore from "../../models/count/Count";
const Counter = observer((props: { store: any }) => {
  const handleIncrement = () => {
    props.store.count.get("1001")!.increment();
  };

  const handleDecrement = () => {
    props.store.count.get("1001")!.decrement();
  };

  console.log("store: ", props.store.count.get("1001").count);
  return (
    <MainContainer>
      <CounterContainer>
        <Count>
          {/* {count} */}
          {props.store.count.get("1001").count}
        </Count>
        <StyledButton onClick={handleIncrement}>Increment</StyledButton>
        <StyledButton onClick={handleDecrement}>Decrement</StyledButton>
      </CounterContainer>
    </MainContainer>
  );
});

export default Counter;
