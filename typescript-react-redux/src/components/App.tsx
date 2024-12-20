import { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, fetchTodos } from "../actions";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
}

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element => {
    return (
      <ul>
        {this.props.todos.map((todo: Todo) => (
          <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
            {todo.title}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos!</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
