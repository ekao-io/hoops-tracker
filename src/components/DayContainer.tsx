import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { Box, Grid } from "@material-ui/core";
import WorkoutForm from "./WorkoutForm";

import "./DayContainer.scss";

export default function DayContainer() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (!date) {
      return;
    }
    setSelectedDate(date);
  };

  return (
    <Grid className="day-container">
      <Grid>
        <Box>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={selectedDate} onChange={handleDateChange} />
          </MuiPickersUtilsProvider>
        </Box>
      </Grid>
      <Grid>
        <WorkoutForm />
      </Grid>
    </Grid>
  );
}
