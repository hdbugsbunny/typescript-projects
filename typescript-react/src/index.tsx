import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hello Guests!</h1>
      <GuestList />
    </div>
  );
};

root.render(<App />);
