import { thunder } from "killua";
import { toast } from "react-toastify";

import type { TTodo } from "@/types/todo";

const thunderTodos = thunder({
  key: "todos",
  encrypt: false,
  default: [] as TTodo[],
  expire: null,
  reducers: {
    add: (state: TTodo[], payload: TTodo) => {
      toast.success("Todo added successfully");
      return [...state, payload];
    },
    remove: (state: TTodo[], payload: number) => {
      toast.success("Todo deleted successfully");
      return state.filter((todo) => todo.id !== payload);
    },
    edit: (state: TTodo[], payload: TTodo) => {
      toast.success("Todo edited successfully");
      return state.map((todo) => (todo.id === payload.id ? payload : todo));
    },
  },
  selectors: {
    isEmpty: (state: TTodo[]) => state.length === 0,
  },
});

export { thunderTodos };
