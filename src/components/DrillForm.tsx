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
} from "@material-ui/core";
import { useFormStyles } from "./WorkoutForm";

export default function DrillForm(props: any) {
  const [open, setOpen] = useState(false);
  const [radioOption, selectRadioOption] = useState<null | string>(null);

  const handleRadioSelect = (e: ChangeEvent<HTMLInputElement>) => {
    selectRadioOption(e.currentTarget.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
  };

  const classes = useFormStyles();
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
        <Box m={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">What drill type is this?</FormLabel>
            <RadioGroup
              aria-label="drill"
              name="drilltype"
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
      </Dialog>
    </ListItem>
  );
}
