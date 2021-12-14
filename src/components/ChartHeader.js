import React from "react";
import { useSelector } from "react-redux";

import { getWeekdays } from "../helpers/weekHelper";

function ChartHeader() {
  const days = useSelector((state) => state.chart.week);

  return (
    <>
      {/* empty div for the chore header */}
      <div></div>
      {days.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </>
  );
}

export default ChartHeader;
