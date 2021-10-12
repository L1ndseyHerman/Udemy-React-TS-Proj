import React from "react";

//  React.FC is a pre-coded TypeScript type! It has props.children for like <Wrapper />s n stuff!
//  Define your own props in the <>, and it will merge with the existing ones!
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
