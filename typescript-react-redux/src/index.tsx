import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom/client";

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App color="red" />
  </StrictMode>
);
