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
  render() {
    return <div>Hi There!</div>;
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
