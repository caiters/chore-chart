import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeekdays } from "../helpers/weekHelper";

import { addChore } from "../store/choresSlice";

function Chores() {
  const dispatch = useDispatch();
  const chores = useSelector((state) => state.chores.list);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.newChore.value, "value");
    console.log("add chore TODO");
    dispatch(addChore(e.target.newChore.value));
  };

  return (
    <>
      {chores.map((chore) => (
        <div className="chore-row">
          <div key={chore}>{chore}</div>
        </div>
      ))}
      <div className="chore-row">
        <form onSubmit={handleAdd}>
          <input name="newChore" id="newChore" />
          <button type="submit">+</button>
        </form>
      </div>
    </>
  );
}

export default Chores;
