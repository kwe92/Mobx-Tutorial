import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppGlobalTheme } from "./indexStyles";
import CountStore from "./models/count/Count";
import { applySnapshot, onSnapshot } from "mobx-state-tree";

const store = CountStore.create({});

store.addCount({ id: 1001, count: 0 });

const ele = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(ele);

root.render(
  <React.StrictMode>
    <AppGlobalTheme />
    <App store={store} />
  </React.StrictMode>
);

onSnapshot(store, (newSnapshot) => {
  console.log("New Snapshot", newSnapshot);
});
