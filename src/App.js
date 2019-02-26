import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ProductList from "./productList.jsx";
import Cart from "./cart";

class App extends Component {
  render() {
    return (
      <div>
        <ProductList />
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
