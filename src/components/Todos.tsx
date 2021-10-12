import React from "react";

//  If u import a class file, it can be a type!
import Todo from "../models/todo";

//  React.FC is a pre-coded TypeScript type! It has props.children for like <Wrapper />s n stuff!
//  Define your own props in the <>, and it will merge with the existing ones!
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
