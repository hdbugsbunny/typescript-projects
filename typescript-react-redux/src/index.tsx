import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom/client";

interface AppProps {
  color?: string;
}

class App extends Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App color="red" />
  </StrictMode>
);
