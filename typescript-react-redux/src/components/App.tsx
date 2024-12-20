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

interface AppState {
  fetching: boolean;
}

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
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
        {this.state.fetching && <p>Loading...</p>}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
