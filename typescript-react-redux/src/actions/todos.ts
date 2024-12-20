import axios from "axios";
import { Dispatch } from "redux";
import {
  ActionTypes,
  DeleteTodoAction,
  FetchTodosAction,
  Todo,
  TODO_URL,
} from "../utils";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(TODO_URL);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
