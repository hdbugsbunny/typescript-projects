import { Child, Child1 } from "./Child";

const Parent = () => {
  return (
    <div>
      Parent Component!
      {<Child color="red" />}
      {<Child1 color="blue" />}
    </div>
  );
};

export default Parent;
