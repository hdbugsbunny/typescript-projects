interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export enum ActionTypes {
  fetchTodos = "FETCH_TODOS",
  deleteTodo = "DELETE_TODO",
}

export type Action = FetchTodosAction | DeleteTodoAction;
