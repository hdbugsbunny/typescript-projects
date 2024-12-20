import { combineReducers } from "redux";
import { StoreState } from "../utils";
import { todosReducer } from "./todos";

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
