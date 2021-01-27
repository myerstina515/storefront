
let initialState = { 
  cart: [] 
};

export const addItem = (product) => {
  console.log(product);
  return {
    type: 'ADD',
    payload: product
  }
}

export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: product
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD':
      console.log(initialState.cart);
      return {
        ...state, 
        cart: [...state.cart, payload]};
    case 'REMOVE':
      state.cart.forEach((item) => {
        if (item.name === payload) state.cart.splice(item, 1);
      })
      return {
        ...state,
        cart: [...state.cart]
      }
    default:
      return state
  }
}