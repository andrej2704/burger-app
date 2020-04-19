import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 4,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState = ingridients => {
    const sum = Object.keys(ingridients)
      .map(igKey => {
        return ingridients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      });
    this.setState({ purchaseable: sum > 0 });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("You continued shopping");
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
    this.updatePurchaseState(updatedIngridients);
  };

  removeIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    const updatedCount = oldCount !== 0 ? oldCount - 1 : oldCount;
    const updatedIngridients = {
      ...this.state.ingridients
    };
    updatedIngridients[type] = updatedCount;
    const priceDeduction = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingridients: updatedIngridients });
    this.updatePurchaseState(updatedIngridients);
  };
  render() {
    const disableInfo = {
      ...this.state.ingridients
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            ingridients={this.state.ingridients}
            price={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          ingridientAdded={this.addIngridientHandler}
          ingridientRemoved={this.removeIngridientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBulder;
