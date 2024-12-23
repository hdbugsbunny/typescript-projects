import ReactDOM from "react-dom/client";
import UserSearchRef from "./refs/UserSearchRef";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <UserSearchRef />
    </div>
  );
};

root.render(<App />);
