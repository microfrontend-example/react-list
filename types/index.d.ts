declare module "@throwjs/store" {
  import { Observable } from "rxjs";
  export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
  }
  class StoreTodo {
    private _storeTodo$;
    private _id;
    constructor();
    get storeTodo$(): Observable<ITodo[]>;
    get id(): number;
    addTodo(todo: ITodo): void;
    changeCompleted(id: number): void;
    deleteTodo(id: number): void;
    private todos;
  }
  const storeTodo: StoreTodo;
  export default storeTodo;
}
