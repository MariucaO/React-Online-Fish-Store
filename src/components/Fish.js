import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { details } = this.props;
    if (!details) {
      return null;
    }
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
          <p>{desc}</p>
          <button
            disabled={!isAvailable}
            onClick={() => this.props.addToOrder(this.props.index)}
          >
            {isAvailable ? "Add To Order" : "Sold Out"}
          </button>
        </h3>
      </li>
    );
  }
}

export default Fish;
