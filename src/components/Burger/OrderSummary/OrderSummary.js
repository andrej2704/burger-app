import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingridients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingridients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A tasty burgetr with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total price: {props.price}</strong>
      </p>
      <p>Contitue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
