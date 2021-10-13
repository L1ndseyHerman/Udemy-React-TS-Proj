import React, { useState } from "react";
import Todo from "../models/todo";

//  Like an interface, using twice in this component, so makes sense to declare just once!
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

//  createContext is a generic type!
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  //  Ahh, and here's that "never[]" type that I struggled with in the other
  //  programming knowledge test!
  //  "never[]" means no values are ever allowed in the array?! When would u ever want that?!
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    // Why is there a function (return) inside of this useState()?
    setTodos((prevTodos) => {
      //  Keep all the todos where the ids do not match the index to delete.
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
