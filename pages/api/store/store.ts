import create, { StateCreator } from "zustand";
import { devtools } from 'zustand/middleware';


// Dalam Typescript harus mendeklarasikan tipe data
export type TodoItem = {
    id: number;
    title : string;
    done: boolean;
};

export interface State {
  items: TodoItem[];
  hideCompleted: boolean;
  addItem(item: TodoItem): void;
  toggleHideCompleted(): void;
  toggleItem(item: TodoItem): void;
  removeItem(item: TodoItem): void;
  removeCompleted(): void;
}

// export const createTodoList: StateCreator<State, [["zustand/devtools", never]], []> = (set) => ({
//   id : 0,

// })
