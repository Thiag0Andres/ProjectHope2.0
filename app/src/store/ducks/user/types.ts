export enum UserTypes {
  UPDATE_USER = "@ProjectHope/HANDLE_USER",
  REMOVE_USER = "@ProjectHope/REMOVE_USER",
}

export interface User {
  id: number;
  name: string;
  email: string;
  image_url: string;
  user_type: string;
  relationship_drugs: string;
  relationship_family: string;
  time_without_drugs: string;
  age: number;
  token: string;
}

export interface UserState {
  user: User;
}
