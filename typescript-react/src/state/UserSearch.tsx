import React, { useState } from "react";

const USERS = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 23 },
  { name: "John", age: 22 },
  { name: "Emily", age: 21 },
  { name: "Michael", age: 21 },
  { name: "David", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onSearchUser = () => {
    const foundUser = USERS.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>Find User</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSearchUser}>Search</button>
      {user && (
        <p>
          {user.name} is {user.age} years old.
        </p>
      )}
    </div>
  );
};

export default UserSearch;
