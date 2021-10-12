import React, { useRef } from "react";

//  An example for how to pass a function in as a prop and make it TypeScript-typed!
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  //  Refs need types in TypeScript. This is the right type for this one
  //  It also needs a starting value of null.
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //  This is the correct type!
  //  If you did an onclick, would be React.MouseEvent!
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //  The ref might not be set to a value yet when u use it, so it needs a "?".
    //const enteredText = todoTextInputRef.current?.value;

    //  If u know that a value that could possibly be null won't be, like when u submit
    //  a form, it will definitely have something in it, can replace "?" with "!".

    //  "?" and "!" are TypeScript-specific things that deal w values that could be null.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //  throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  //  Don't forget the "htmlFor" and the "id" for accessability!
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
