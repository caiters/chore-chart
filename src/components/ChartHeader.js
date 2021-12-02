import React from "react";
import { useSelector } from "react-redux";

import { getWeekdays } from "../helpers/weekHelper";

function ChartHeader() {
  const days = useSelector((state) => state.chart.week);

  return (
    <div className="chart__header">
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}

export default ChartHeader;
