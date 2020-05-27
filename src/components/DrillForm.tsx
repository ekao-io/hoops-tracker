import React, { useState, ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  TextField,
} from "@material-ui/core";
import { useFormStyles } from "./WorkoutForm";

import "./DrillForm.scss";
import {
  TimePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";

export default function DrillForm(props: any) {
  const [open, setOpen] = useState(false);
  const [radioOption, selectRadioOption] = useState<null | string>(null);
  const [selectedTime, setMinutes] = useState(new Date());
  const [totalMakes, setMakes] = useState("0");
  const [totalAttempts, setAttempts] = useState("0");

  const handleTimeChange = (time: MaterialUiPickersDate) => {
    if (!time) {
      return;
    }
    setMinutes(time);
  };
  const handleRadioSelect = (e: ChangeEvent<HTMLInputElement>) => {
    selectRadioOption(e.currentTarget.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
  };

  const handleMakeChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMakes(e.currentTarget.value);
  };

  const handleAttemptChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAttempts(e.currentTarget.value);
  };

  const classes = useFormStyles();

  const speedForm = () => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          ampm={false}
          variant="inline"
          label="Time elapsed"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </MuiPickersUtilsProvider>
    );
  };

  const accuracyForm = () => {
    return (
      <div>
        <TextField
          label="Total Makes"
          onChange={handleMakeChange}
          value={totalMakes}
        />{" "}
        <TextField
          label="Total Attempts"
          onChange={handleAttemptChange}
          value={totalAttempts}
        />
      </div>
    );
  };

  return (
    <ListItem button>
      <ListItemText
        primary="Drill 1"
        secondary="Drill 1"
        onClick={handleClickOpen}
      />
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar className={useFormStyles().appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Drill 1
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box m={4} display="flex" flexDirection="column">
          <div className="drill-form__description">
            Description: "Description will go here (left handed layup)"
          </div>
          <Box my={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                What type of drill is this?
              </FormLabel>
              <RadioGroup
                aria-label="drill"
                name="drill-type"
                value={radioOption}
                onChange={handleRadioSelect}
              >
                <FormControlLabel
                  value="speed"
                  control={<Radio />}
                  label="Speed"
                />
                <FormControlLabel
                  value="accuracy"
                  control={<Radio />}
                  label="Accuracy"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          {radioOption === "speed" && speedForm()}
          {radioOption === "accuracy" && accuracyForm()}
          <form noValidate>
            <TextField label="Notes" />
          </form>
          <div style={{ width: "300px", marginTop: "10px" }}>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </div>
        </Box>
      </Dialog>
    </ListItem>
  );
}
