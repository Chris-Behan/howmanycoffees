import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const homeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  count: {
    margin: "2px",
  },
  text: {
    margin: "0",
  },
}));

type Counter = {
  count: number;
  name: string;
};

function Counter({ count, name }: Counter) {
  const classes = homeStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.count}>{count}</h2>
      <h3 className={classes.text}>{name}</h3>
    </div>
  );
}

export default Counter;
