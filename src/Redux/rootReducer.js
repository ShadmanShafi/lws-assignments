import { combineReducers } from "redux";
import inventoryItemReducer from "./InventoryItem/InventoryItemReducer";
import cartItemReducer from "./CartItem/cartItemReducer";

const rootReducer = combineReducers({
  inventoryItem: inventoryItemReducer,
  cartItem: cartItemReducer,
});

export default rootReducer;
