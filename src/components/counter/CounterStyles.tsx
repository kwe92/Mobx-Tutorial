import styled from "styled-components";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainer = styled(Column)`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const CounterContainer = styled(Column)`
  height: 24rem;
  width: 18rem;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

const StyledButton = styled.button`

 width: 90%;
 height 3.25rem;
 background: purple;
 color: white;
 border: none;
 border-radius: 0.5rem;

`;

const Count = styled.p`
  font-size: 3rem;
`;

export { MainContainer, CounterContainer, StyledButton, Count };
