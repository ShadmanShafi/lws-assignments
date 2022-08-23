import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
