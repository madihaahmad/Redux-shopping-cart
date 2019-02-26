import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOne, removeAll } from "./actions";

class Cart extends Component {
  render() {
    console.log(this.props);
    //const item = Object.values(this.props.cart);
    const item = this.props.cart;
    console.log(item);
    return (
      <div>
        <h2 className="text-primary">Your Cart</h2>
        {item.map((product, i) => (
          <ul className="list-group">
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={i}
            >
              {" "}
              {product.title} | $: {product.price}
              <div className="d-flex justify-content-between align-items-center">
                <span className="badge badge-primary badge-pill mr-1">
                  {" "}
                  {product.inventory}
                </span>
                <input
                  type="button"
                  className="btn btn-sm btn-outline-danger float-right mr-1 "
                  onClick={() => {
                    //  console.log(product);
                    this.props.removeOne(product);
                  }}
                  value="-"
                />
                <input
                  type="button"
                  value="removeAll"
                  className="btn btn-sm btn-danger float-right  "
                  onClick={() => {
                    //  console.log(product);
                    this.props.removeAll(product);
                  }}
                />
              </div>
            </li>
          </ul>
        ))}
        <p>Total: $ {this.props.total.toFixed(2)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeOne: product => dispatch(removeOne(product)),
    removeAll: product => dispatch(removeAll(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
