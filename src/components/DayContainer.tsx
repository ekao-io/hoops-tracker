import React, { useState } from "react";
import { DateTime } from "luxon";

export default function DayContainer() {
  const [day, setDay] = useState(DateTime.local());

  return (
    <div>
      <button onClick={() => setDay(day.minus({ days: 1 }))}>Prev</button>
      <div>{day.toLocaleString(DateTime.DATE_MED)}</div>
      <button onClick={() => setDay(day.plus({ days: 1 }))}>Next</button>
    </div>
  );
}
