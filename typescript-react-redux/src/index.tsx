import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
