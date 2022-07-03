import React from "react";

import classes from "./PizzaImage.css";

// Todo: Work out how to stop this from breaking
const PizzaImg = require("../../assets/pizza.jpg");

export const PizzaImage: React.FC = () => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImg} className={classes.PizzaImg} />
  </div>
);
