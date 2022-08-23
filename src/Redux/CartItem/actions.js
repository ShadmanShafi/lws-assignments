import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const addItem = (id, name, quantity, price) => {
  return {
    type: ADD_ITEM,
    payload: {
      id: id,
      name: name,
      quantity: quantity,
      price: price,
    },
  };
};

export const removeItem = (id, name, quantity, price) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id: id,
      name: name,
      quantity: quantity,
      price: price,
    },
  };
};
