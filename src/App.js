import React from "react";

import { Provider } from "react-redux";

import { store } from "./store/store";

import "./App.scss";

import Chart from "./components/Chart";
import ChartSettings from "./components/ChartSettings";

function App() {
  return (
    <Provider store={store}>
      <header>
        <h1>Chore Chart Maker</h1>
      </header>
      <main>
        <ChartSettings />
        <Chart />
      </main>
    </Provider>
  );
}

export default App;
