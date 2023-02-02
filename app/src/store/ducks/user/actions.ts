import { UserTypes, UserState } from "./types";

export const updateUser = (data: UserState) => {
  return { type: UserTypes.UPDATE_USER, payload: { data } };
};

export const removeUser = () => {
  return { type: UserTypes.REMOVE_USER };
};
