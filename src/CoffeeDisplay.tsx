import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";

const homeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  coffee: {
    margin: "5px",
  },
}));

type Count = {
  coffees: number;
};

function CoffeeDisplay({ coffees }: Count) {
  const classes = homeStyles();
  return (
    <div className={classes.container}>
      {Array(coffees)
        .fill(0)
        .map((i) => (
          <LocalCafeIcon className={classes.coffee} />
        ))}
    </div>
  );
}

export default CoffeeDisplay;
