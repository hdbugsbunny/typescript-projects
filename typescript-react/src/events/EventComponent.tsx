import React from "react";

const EventComponent: React.FC = () => {
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log("🚀 ~ onInputChange ~ event:", event.target.value);
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log("🚀 ~ event:", event);
  };

  return (
    <div>
      <h3>Event Component</h3>
      <input onChange={onInputChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
