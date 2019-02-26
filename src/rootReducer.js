/* With Array */
import products from "./data.json";

const initState = {
  products,
  cart: [],
  total: 0
};
export function rootReducer(state = initState, action) {
  console.log(state.total);
  switch (action.type) {
    case "ADD_PRODUCT": {
      const index = state.cart.findIndex(item => item.id === action.product.id);

      let temp = [...state.cart];
      let tempProduct = Object.assign({}, action.product);

      console.log(index);
      if (index < 0) {
        tempProduct.inventory = 1;

        return Object.assign({}, state, {
          cart: state.cart.concat(tempProduct),
          total: state.total + action.product.price
        });
      } else {
        temp.map(item => {
          if (item.id === action.product.id) item.inventory++;
        });

        return Object.assign({}, state, {
          cart: temp,
          total: state.cart.reduce((sum, item) => {
            return sum + item.price * item.inventory;
          }, 0)
        });
      }
    }

    case "REMOVE_ONE": {
      let temp = [...state.cart];
      temp.map(item => {
        if (item.id === action.product.id && item.inventory > 0)
          item.inventory--;
      });
      temp = temp.filter(item => item.inventory !== 0);

      return Object.assign({}, state, {
        cart: temp,
        total: state.cart.reduce((sum, item) => {
          return sum + item.price * item.inventory;
        }, 0)
      });
    }
    case "REMOVE_ALL": {
      return Object.assign({}, state, {
        cart: state.cart.filter(item => item.id !== action.product.id),
        total: state.total - action.product.price * action.product.inventory
      });
    }

    default:
      return state;
  }
}
export default rootReducer;
