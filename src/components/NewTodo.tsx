import React from "react";

const NewTodo = () => {
  //  This is the correct type!
  //  If you did an onclick, would be React.MouseEvent!
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  //  Don't forget the "htmlFor" and the "id" for accessability!
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
