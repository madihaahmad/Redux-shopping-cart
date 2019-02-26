export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    product
  };
}

export function removeOne(product) {
  return {
    type: "REMOVE_ONE",
    product
  };
}

export function removeAll(product) {
  return {
    type: "REMOVE_ALL",
    product
  };
}

// export function getData() {
//   console.log("in fetch data action");
//   return dispatch => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => res.json())
//       .then(users =>
//         dispatch({
//           type: "GET_USERS",
//           payload: users
//         })
//       );
//   };
// }
