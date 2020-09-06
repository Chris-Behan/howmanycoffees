import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CoffeeDisplay from "./CoffeeDisplay";
import Counter from "./Counter";
import SearchBar from "./SearchBar";

const homeStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  header: {
    alignSelf: "center",
  },
}));

function Home() {
  const classes = homeStyles();
  const [count, setCount] = useState(100);
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>How many coffees?</h1>
      <SearchBar />
      <CoffeeDisplay coffees={count} />
      <Counter count={count} name="Coffees" />
    </div>
  );
}

export default Home;
