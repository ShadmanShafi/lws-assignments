import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { INCREMENT, DECREMENT } from "./InventoryItem/actionTypes";
import { ADD_ITEM, REMOVE_ITEM } from "./CartItem/actionTypes";

const stockChecker = (store) => (next) => (action) => {
  // console.log(store.getState());
  // console.log(store.getState().inventoryItem[0].quantity);
  // const itemInventory = store.getState().inventoryItem[action.payload.id-1].quantity;

  const itemInventory = [action].reduce(rootReducer, store.getState())
    .inventoryItem[action.payload.id - 1];
  console.log(itemInventory);

  // switch (action.type) {
  //   case DECREMENT:
  //     if(itemInventory > 0) return next(action);

  //   default:
  //     return next(action);
  // }

  // console.log(action.type);
  // console.log(DECREMENT);
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(stockChecker));

export default store;
