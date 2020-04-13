import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBulder extends Component {
  state = {
    ingridients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    }
  };
  render() {
    return (
      <Aux>
        <Burger ingridients={this.state.ingridients} />
        <div>Build controls</div>
      </Aux>
    );
  }
}

export default BurgerBulder;
