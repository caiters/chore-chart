import React from "react";

import { useSelector } from "react-redux";

import ChartHeader from "./ChartHeader";
import Chores from "./Chores";

function Chart() {
  const showWeekend = useSelector((state) => state.chart.showWeekend);
  return (
    <div className={showWeekend ? "chart" : "chart chart--week-5"}>
      <ChartHeader />
      <Chores />
    </div>
  );
}

export default Chart;
