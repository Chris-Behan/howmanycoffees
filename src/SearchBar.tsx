import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const homeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
}));

function SearchBar() {
  const classes = homeStyles();
  return (
    <div className={classes.container}>
      <TextField label="for a..." variant="filled"></TextField>
    </div>
  );
}

export default SearchBar;
