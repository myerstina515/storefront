

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    // { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    // { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};
// actions
export const setActiveCategory = (name) => {
  console.log(name);
  return {
    type: 'SWITCH',
    payload: name
  }
}
export const filterProducts = (name) => {
  console.log(name);
  return {
    type: 'FILTER',
    payload: name
  }
}

// export const reset = () => {
//   return {
//     type: 'RESET'
//   }
// }

// export a function that has two parameters, state and action
// action has both type and payload in it
// switch statement to determijne what the type is
// the default return is state

export default (state=initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SWITCH':
      state.activeCategory = action.payload;
      console.log('inital state', initialState);
      return state;
    case 'FILTER':
      state.filterProducts = action.payload;
      let categories = state.products.filter((item) => item.category === payload);
      return {categories};
    default:
      return state;
  }
}