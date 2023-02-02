import { combineReducers } from "redux";
import { persistReducer, PersistConfig } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import user from "./user";

const reducer = combineReducers({
  user,
});

const authPersistConfig: PersistConfig<any> = {
  key: "reducers",
  storage: AsyncStorage,
};

export default persistReducer(authPersistConfig, reducer);
