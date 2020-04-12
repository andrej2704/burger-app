import React from "react";
import classes from "./Burger.module.css";
import BurgetIngridient from "./BurgerIngridient/BurgerIngridient";

const burger = props => {
  return (
    <div className={classes.Burger}>
      <BurgetIngridient type="bread-top" />
      <BurgetIngridient type="cheese" />
      <BurgetIngridient type="bacon" />
      <BurgetIngridient type="meat" />
      <BurgetIngridient type="salad" />
      <BurgetIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
