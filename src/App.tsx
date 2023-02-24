import React from "react";
import Counter from "./components/counter/Counter";
import { observer } from "mobx-react-lite";
const App = observer((props: { store: any }) => {
  return <Counter store={props.store} />;
});

export default App;
