import { createStore, applyMiddleware, Store } from "redux";
import { UserState } from "./ducks/user/types";
import thunk from "redux-thunk";

import rootReducer from "./ducks/rootReducer";

export interface iStore {
  user: UserState;
}

let middleware: any = [];

// Add middleware here if needed
if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk];
}

const store: Store<iStore> = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
