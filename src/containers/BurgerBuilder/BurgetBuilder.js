import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGRIDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
class BurgerBulder extends Component {
  state = {
    ingridients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridients = {
      ...this.state.ingridients
    };
    updatedIngridients[type] = updatedCount;
    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingridients: updatedIngridients });
  };

  removeIngridientHandler = type => {};
  render() {
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls ingridientAdded={this.addIngridientHandler} />
      </Aux>
    );
  }
}

export default BurgerBulder;
