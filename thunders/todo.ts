import { TTodo } from "@/types/todo";
import toast from "@/utils/toast";
import { thunder } from "killua";

const thunderTodos = thunder({
  key: "todos",
  encrypt: false,
  default: [] as TTodo[],
  expire: null,
  reducers: {
    add: (state: TTodo[], payload: TTodo) => {
      toast({
        text: "Todo added successfully",
        type: "success",
      });
      return [...state, payload];
    },
    remove: (state: TTodo[], payload: number) => {
      toast({
        text: "Todo deleted successfully",
        type: "success",
      });
      return state.filter((todo) => todo.id !== payload);
    },
    edit: (state: TTodo[], payload: TTodo) =>
      state.map((todo) => (todo.id === payload.id ? payload : todo)),
  },
  selectors: {
    isEmpty: (state: TTodo[]) => state.length === 0,
    todosLength: (state: TTodo[]) => state.length,
  },
});

export { thunderTodos };
