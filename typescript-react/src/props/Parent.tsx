import { Child } from "./Child";

const Parent = () => {
  return (
    <div>
      Parent Component
      {<Child color="red" />}
    </div>
  );
};

export default Parent;
