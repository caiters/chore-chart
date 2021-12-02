const daysOfTheWeek = [
  {
    fullName: "Sunday",
    abbr: "sun",
  },
  {
    fullName: "Monday",
    abbr: "mon",
  },
  {
    fullName: "Tuesday",
    abbr: "tue",
  },
  {
    fullName: "Wednesday",
    abbr: "wed",
  },
  {
    fullName: "Thursday",
    abbr: "thu",
  },
  {
    fullName: "Friday",
    abbr: "fri",
  },
  {
    fullName: "Saturday",
    abbr: "sat",
  },
];

export function getWeekdays(showWeekend, weekendPlacement, format = "abbr") {
  let week = [...daysOfTheWeek];
  if (!showWeekend) {
    // omit the weekend days
    week.shift();
    week.pop();
  } else {
    // do nothing for sandwich because that is the default
    if (weekendPlacement === "end") {
      let sunday = week.shift();
      week.push(sunday);
    }
  }

  return week.map((day) => day[format]);
}
