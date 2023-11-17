"use client";

import IconEdit from "@/assets/icons/edit.svg";
import IconTrash from "@/assets/icons/trash.svg";
import { thunderTodos } from "@/thunders/todo";
import { TTodo } from "@/types/todo";
import { useKillua } from "killua";

interface IProps {
  todo: TTodo;
  index: number;
}

export default function Todo(props: IProps): JSX.Element {
  // remove todo from localstorage
  const localStorageTodos = useKillua(thunderTodos);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-600 bg-slate-800">
      {/* head */}
      <div className="flex justify-between p-3.5">
        <p className="px-2">{props.index + 1}</p>
        <div className="todos-center flex gap-2">
          <button>
            <IconEdit />
          </button>
          <button
            onClick={() => {
              localStorageTodos.reducers.remove(props.todo.id);
            }}
          >
            <IconTrash />
          </button>
        </div>
      </div>
      {/* body */}
      <div>
        {[
          {
            title: "title",
            text: props.todo.title,
          },
          {
            title: "description",
            text: props.todo.description,
          },
          {
            title: "status",
            text: props.todo.status,
          },
        ].map((item) => (
          <div
            key={item.text}
            className="relative border-t border-gray-600 p-3.5"
          >
            <span className="title absolute -top-2 left-2 bg-slate-800 text-gray-300 px-2">
              {item.title}
            </span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
