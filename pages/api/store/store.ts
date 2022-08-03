import create from 'zustand';
import { devtools } from 'zustand/middleware';

export type TodoItem = {
  id: number;
  title: string;
  done: boolean;
  edit: string;
};

export interface State {
  items: TodoItem[];
  addItem(item: TodoItem): void;
  toggleItem(item: TodoItem): void;
  removeItem(item: TodoItem): void;
  // editItem(item: TodoItem): void;
  removeCompleted(): void;
}

export const useStore = create<State>(
    devtools(
      (set) => ({
        items: [],
        addItem: (item: TodoItem) => set((state) => ({ items: [...state.items, item] }), false, 'ADD_ITEM'),
        // editItem: (item: TodoItem) => set((state) => ({ items: [...state.items, item] }), false, 'ADD_ITEM'),
        removeItem: (item: TodoItem) => set((state) => ({ items: state.items.filter((it) => it.id !== item.id) }), false, 'REMOVE_ITEM'),
        toggleItem: (item: TodoItem) =>
          set(
            (state) => ({
              items: state.items.map((it) => ({ ...it, done: it.id === item.id ? !item.done : it.done }))
            }),
            false,
            'TOGGLE_ITEM'
          ),
          // editItem: (item: TodoItem) =>
          // set(
          //   (state) => ({
          //     items: state.items.map((it) => ({ ...it, edit: it.title === item.title ? !item.title : it.title }))
          //   }),
          //   false,
          //   'EDIT_ITEM'
          // ),
        removeCompleted: () => set((state) => ({ items: state.items.filter((it) => !it.done) }), false, 'REMOVE_COMPLETED')
      }),
      'TodoStore'
    ),
);
