import Todo from "@/components/todo";
import { TTodo } from "@/types/todo";
import imageTodoListIsEmpty from "@/assets/images/todolist-is-empty.png";
import Image from "next/image";

const todos: TTodo[] = [
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
];

export default function Home() {
  return (
    <main className={`minimal-scrollbar max-h-[390px] space-y-4`}>
      {!!todos.length ? (
        todos.map((item, index) => (
          <Todo key={item.id} todo={item} index={index} />
        ))
      ) : (
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <Image
            width={150}
            src={imageTodoListIsEmpty}
            alt="todo list is empty"
          />
          <p className="font-medium">todo list is empty!</p>
        </div>
      )}
    </main>
  );
}
