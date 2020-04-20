import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { AppBar, Toolbar, IconButton, Divider } from "@material-ui/core";
import { useFormStyles } from "./WorkoutForm";
import DrillForm from "./DrillForm";

export default function CategoryForm(props: any) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
  };

  const classes = useFormStyles();
  return (
    <div>
      <ListItem button>
        <ListItemText
          primary="Category"
          secondary="Select a category"
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
                Select a category
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <DrillForm />
            <Divider />
            <ListItem button>
              <ListItemText primary="Drill 2" secondary="Drill 2" />
            </ListItem>
          </List>
        </Dialog>
      </ListItem>
    </div>
  );
}
