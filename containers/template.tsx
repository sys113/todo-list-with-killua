"use client";

import { useState } from "react";

import ModalAddTodo from "./modal-add-todo";

interface IProps {
  children: React.ReactNode;
}

export default function Template(props: IProps): JSX.Element {
  // show/hide modal add todo
  const [isOpenModalAddTodo, setIsOpenModalAddTodo] = useState<boolean>(false);

  return (
    <>
      <ModalAddTodo
        isOpen={isOpenModalAddTodo}
        onClose={(): void => setIsOpenModalAddTodo(false)}
      />
      <div className="w-full max-w-[500px] space-y-4 rounded-lg border border-gray-600 px-3.5 py-4">
        <header className="flex items-center justify-between font-medium">
          <p>Todo List</p>
          <button
            onClick={(): void => setIsOpenModalAddTodo(true)}
            className="btn-animation rounded-md bg-purple-600 px-7 py-[8px] text-white transition-all duration-300"
          >
            Add
          </button>
        </header>
        {props.children}
      </div>
    </>
  );
}
