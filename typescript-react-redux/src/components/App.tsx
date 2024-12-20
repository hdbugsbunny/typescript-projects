import { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions";

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
  fetchTodos(): any;
}

class _App extends Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element => {
    return (
      <ul>
        {this.props.todos.map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
