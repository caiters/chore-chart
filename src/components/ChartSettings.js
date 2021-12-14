import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNameDisplay,
  setWeek,
  toggleWeekend,
  toggleWeekendPlacement,
} from "../store/chartSlice";

function ChartSettings() {
  const showWeekend = useSelector((state) => state.chart.showWeekend);
  const weekendPlacement = useSelector((state) => state.chart.weekendPlacement);
  const nameDisplay = useSelector((state) => state.chart.nameDisplay);

  const dispatch = useDispatch();

  // TODO: is this really the best place for this? I think it might be?
  useEffect(() => {
    // rebuild the week if any of these settings change
    dispatch(setWeek());
  }, [showWeekend, weekendPlacement, nameDisplay]);

  return (
    <form>
      <div className="input-group">
        <label htmlFor="showWeekends">Show Weekends</label>
        <input
          type="checkbox"
          name="showWeekends"
          id="showWeekends"
          checked={showWeekend}
          onChange={() => dispatch(toggleWeekend())}
        />
      </div>
      {showWeekend && (
        <div className="input-group">
          <label htmlFor="weekendPlacement">Weekend Placement</label>
          <select
            id="weekendPlacement"
            onChange={() => dispatch(toggleWeekendPlacement())}
            value={weekendPlacement}
          >
            <option></option>
            <option value="sandwich">Sandwich (Week starts Sunday)</option>
            <option value="end">End (Week starts Monday)</option>
          </select>
        </div>
      )}
      <div className="input-group">
        <label htmlFor="dayNames">Day of the week names</label>
        <select
          id="dayNames"
          onChange={(e) => dispatch(setNameDisplay(e.target.value))}
          value={nameDisplay}
        >
          <option></option>
          <option value="fullName">Full name (ex. "Sunday")</option>
          <option value="abbr">Abbreviated (ex. "sun")</option>
        </select>
      </div>
    </form>
  );
}

export default ChartSettings;
