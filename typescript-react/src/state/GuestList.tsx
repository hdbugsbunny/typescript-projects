import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const addGuest = () => {
    if (name) {
      setGuests([...guests, name]);
      setName("");
    }
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest: string, index: number) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={addGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
