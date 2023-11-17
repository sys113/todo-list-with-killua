"use client";

import { useState } from "react";
import ModalAddTodo from "./modal-add-todo";

interface IProps {
  children: React.ReactNode;
}
export default function Layout(props: IProps): JSX.Element {
  // show/hide modal add todo
  const [isOpenModalAddTodo, setIsOpenModalAddTodo] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[500px] space-y-4 rounded-lg border border-gray-600 p-3.5">
      <header className="flex items-center justify-between font-medium">
        <p>Todo List</p>
        <button
          onClick={() => setIsOpenModalAddTodo(true)}
          className="btn-animation rounded-md bg-purple-600 px-7 py-[8px] text-white transition-all duration-300"
        >
          Add
        </button>
      </header>
      <ModalAddTodo
        isOpen={isOpenModalAddTodo}
        onClose={() => setIsOpenModalAddTodo(false)}
      />
      {props.children}
    </div>
  );
}
