interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Child {color}!</div>;
};
