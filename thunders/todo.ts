import { TTodo } from "@/types/todo";
import { thunder } from "killua";

const thunderTodos = thunder({
  key: "todos",
  encrypt: false,
  default: [
    {
      id: 1,
      title: "learn react",
      description: "learn react and typescript",
      status: "blocked",
    },
    {
      id: 2,
      title: "learn nextjs",
      description: "learn nextjs and typescript",
      status: "done",
    },
    {
      id: 3,
      title: "learn tailwindcss",
      description: "learn tailwindcss and typescript",
      status: "inProgress",
    },
    {
      id: 4,
      title: "learn react-query",
      description: "learn react-query and typescript",
      status: "inQA",
    },
    {
      id: 5,
      title: "learn react-query",
      description: "learn react-query and typescript",
      status: "todo",
    },
  ] as TTodo[],
  expire: null,
  reducers: {
    add: (state: TTodo[], payload: TTodo) => [...state, payload],
    remove: (state: TTodo[], payload: number) => state.filter((todo) => todo.id !== payload),
    edit: (state: TTodo[], payload: TTodo) => state.map((todo) => (todo.id === payload.id ? payload : todo)),
  },
  selectors: {
    isEmpty: (state: TTodo[]) => state.length === 0,
  },
});

export { thunderTodos };
