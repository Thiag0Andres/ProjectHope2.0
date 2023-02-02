import { Reducer } from "redux";
import { UserState, UserTypes } from "./types";

const INITIAL_STATE: UserState = {
  user: {
    id: 0,
    name: "",
    email: "",
    image_url: "",
    user_type: "",
    relationship_drugs: "",
    relationship_family: "",
    time_without_drugs: "",
    age: 0,
    token: "",
  },
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.UPDATE_USER:
      return { ...state, user: action.payload.data.user };
    case UserTypes.REMOVE_USER:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};

export default reducer;
