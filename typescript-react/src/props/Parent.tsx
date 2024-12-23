import { Child, Child1 } from "./Child";

const Parent = () => {
  return (
    <div>
      Parent Component!
      <Child color="red" onClick={() => console.log("Child!")}>
        Child
      </Child>
      <Child1 color="blue" onClick={() => console.log("Child1!")}>
        Child1
      </Child1>
    </div>
  );
};

export default Parent;
