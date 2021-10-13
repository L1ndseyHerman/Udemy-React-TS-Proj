import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

//  React.FC is a pre-coded TypeScript type! It has props.children for like <Wrapper />s n stuff!
//  Define your own props in the <>, and it will merge with the existing ones!

//  Don't forget, .bind() adds a thing to an object after the fact!
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
