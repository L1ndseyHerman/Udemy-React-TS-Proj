//  This could use "type" OR "interface" OR "class"!
class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    //  Basic way of getting unique ids. Not the best, but works for this exp.
    this.id = new Date().toISOString();
  }
}

export default Todo;
