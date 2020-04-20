import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CategoryForm from "./CategoryForm";

export const useFormStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function WorkoutForm() {
  const classes = useFormStyles();
  const [open, setOpenForm] = useState(false);
  const [categoryFormOpen, setCategoryForm] = useState(false);

  const handleFormOpen = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleCategoryClick = () => {
    setCategoryForm(!categoryFormOpen);
  };

  return (
    <Box my={2}>
      <Button variant="outlined" color="primary" onClick={handleFormOpen}>
        Add workout
      </Button>
      <Dialog fullScreen open={open} onClose={handleCloseForm}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseForm}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add a workout
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseForm}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <CategoryForm categoryFormOpen={categoryFormOpen} />
          <Divider />
          <ListItem button>
            <ListItemText primary="Location" secondary="Select a location" />
          </ListItem>
        </List>
      </Dialog>
    </Box>
  );
}
