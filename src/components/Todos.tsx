import React from "react";

//  If u import a class file, it can be a type!
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//  React.FC is a pre-coded TypeScript type! It has props.children for like <Wrapper />s n stuff!
//  Define your own props in the <>, and it will merge with the existing ones!

//  Don't forget, .bind() adds a thing to an object after the fact!
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
