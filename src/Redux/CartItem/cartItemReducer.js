import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

const initalState = [
  {
    id: 1,
    name: "Asus Vivobook X515MA",
    quantity: 0,
    price: 35500,
  },
  {
    id: 2,
    name: "Dell E1916HV 18.5 Inch",
    quantity: 0,
    price: 9300,
  },
  {
    id: 3,
    name: "Canon Eos 4000D 18MP",
    quantity: 0,
    price: 36500,
  },
];

const cartItemReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return {
          ...cartItem,
        };
      });

    case REMOVE_ITEM:
      return state.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }
        return {
          ...cartItem,
        };
      });

    default:
      return state;
  }
};

export default cartItemReducer;
