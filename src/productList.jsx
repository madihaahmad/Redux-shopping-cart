import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "./actions";

class ProductList extends Component {
  getAvailable = (id, inventory) => {
    //  const cart = Object.values(this.props.cart);
    const cart = this.props.cart;
    const inCart = cart.find(item => {
      return item.id === id;
    });

    console.log(inCart === undefined ? 0 : inCart.inventory);
    let inStock = inventory - (inCart === undefined ? 0 : inCart.inventory);

    return inStock > 0 ? inStock : "Sold Out";
  };
  render() {
    //  const item = Object.values(this.props.products);
    const item = this.props.products;
    return (
      <div>
        <h2 className="text-primary">Products</h2>
        {item.map((product, i) => (
          <ul className="light-group">
            <li
              key={i}
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {" "}
              {product.title} | $: {product.price}
              <div className=" d-flex justify-content-between align-items-center">
                <span class="badge badge-primary badge-pill m-1">
                  {this.getAvailable(product.id, product.inventory)}
                </span>
                <input
                  type="button"
                  className="btn btn-sm btn-success float-right "
                  onClick={() => {
                    this.props.addProduct(product);
                  }}
                  disabled={
                    this.getAvailable(product.id, product.inventory) ===
                    "Sold Out"
                      ? true
                      : false
                  }
                  value="add"
                />
              </div>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
