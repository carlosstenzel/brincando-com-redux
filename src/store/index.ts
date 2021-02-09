import { createStore } from "redux";
import { ICartState } from "./modules/cart/types";
import rootReducer from "./modules/rootReducer";

export interface ISate {
  cart: ICartState;
}

const store = createStore(rootReducer);

export default store;
