declare module "*.html" {
  const rawHtmlFile: string;
  export = rawHtmlFile;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

import { Observable } from "rxjs";

declare module "@throwjs/store" {
  export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
  }

  class StoreTodo {
    private _storeTodo$;
    constructor();
    get storeTodo$(): Observable<ITodo[]>;
    addTodo(todo: ITodo): void;
  }
  const storeTodo: StoreTodo;
  export default storeTodo;
}
