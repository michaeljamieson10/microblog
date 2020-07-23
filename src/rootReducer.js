// import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionTypes";


const DEFAULT_STATE = {
  title: "cat",
  description: "catty",
  body: "lorepm catsuidum"

};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "CREATE_POST": {
      const postCopy = { ...state.newPost };
      // cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        newPost: postCopy
      };
    }
    case "REMOVE_FROM_CART": {
      const cartCopy = { ...state.cartItems };
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
