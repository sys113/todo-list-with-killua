"use client";

import { useKillua } from "killua";
import { useState } from "react";

import IconEdit from "@/assets/icons/edit.svg";
import IconTrash from "@/assets/icons/trash.svg";
import ModalEditTodo from "@/containers/modal-edit-todo";
import { thunderTodos } from "@/thunders/todos";
import type { TTodo } from "@/types/todo";

interface IProps {
  todo: TTodo;
  index: number;
}

export default function TodoItem(props: IProps): JSX.Element {
  // remove todo from localstorage
  const localStorageTodos = useKillua(thunderTodos);

  // show/hide modal edit todo
  const [isOpenModalEditTodo, setIsOpenModalEditTodo] =
    useState<boolean>(false);

  return (
    <>
      <ModalEditTodo
        isOpen={isOpenModalEditTodo}
        onClose={(): void => setIsOpenModalEditTodo(false)}
        todo={props.todo}
      />
      <div className="mb-4 overflow-hidden rounded-lg border border-gray-600 bg-slate-800 last:mb-0">
        {/* head */}
        <div className="flex justify-between p-3.5">
          <p className="px-2">{props.index + 1}</p>
          <div className="flex gap-2">
            <button
              onClick={(): void => {
                setIsOpenModalEditTodo(true);
              }}
            >
              <IconEdit />
            </button>
            <button
              onClick={(): void => {
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
              <span className="absolute -top-2 left-2 bg-slate-800 px-2 text-gray-300">
                {item.title}
              </span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
