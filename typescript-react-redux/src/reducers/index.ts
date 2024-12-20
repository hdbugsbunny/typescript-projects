import { combineReducers } from "redux";
import { todosReducer } from "./todos";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
