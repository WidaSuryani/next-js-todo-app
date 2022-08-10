import { it } from 'node:test';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

export type TodoItem = {
  id: number;
  title: string;
  done: boolean;
  // date: number;
};

export interface State {
  items: TodoItem[];
  addItem(item: TodoItem): void;
  toggleItem(item: TodoItem): void;
  removeItem(item: TodoItem): void;
  removeCompleted(): void;
  // dateCreate(item: TodoItem): void;
}

export const useStore = create<State>(
    devtools(
      (set) => ({
        items: [],
        addItem: (item: TodoItem) => set((state) => ({ items: [...state.items, item] }), false, 'ADD_ITEM'),
        removeItem: (item: TodoItem) => set((state) => ({ items: state.items.filter((it) => it.id !== item.id) }), false, 'REMOVE_ITEM'),
        toggleItem: (item: TodoItem) =>
          set(
            (state) => ({
              items: state.items.map((it) => ({ ...it, done: it.id === item.id ? !item.done : it.done }))
            }),
            false,
            'TOGGLE_ITEM'
          ),
        removeCompleted: () => set((state) => ({ items: state.items.filter((it) => !it.done) }), false, 'REMOVE_COMPLETED')
        // dateCreate: (item: TodoItem) => 
        // set(
        //   (state) => ({
        //     items: state.items.map((it) => ({...it, date: it.getDate() }))
        //   })
        // )
      }),
      'TodoStore'
    ),
);
