import React from "react";

interface ChildProps {
  color: string;
}

/**
 * * Helps TypeScript understand that Child is a function that
 * * will receive an argument of type 'ChildProps'
 * ! Downside: TypeScript doesn't understand that we are defining
 * ! a React Component!
 */
export const Child = ({ color }: ChildProps) => {
  return <div>Child {color}!</div>;
};

/**
 * * 'Child1' will be a React Function Component
 * * 'Child1' might have properties assigned to it like  'propTypes' and 'contextTypes'
 * * 'Child1' will receive props of type 'ChildProps'
 */
export const Child1: React.FC<ChildProps> = ({ color }) => {
  return <div>Child1 {color}!</div>;
};
