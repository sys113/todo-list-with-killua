"use client";

import { useKillua } from "killua";
import Image from "next/image";

import imageLoading from "@/assets/images/loading.gif";
import imageTodoListIsEmpty from "@/assets/images/todolist-is-empty.png";
import TodoItem from "@/components/todo-item";
import { thunderTodos } from "@/thunders/todos";

export default function LisTodos() {
  // get todos from localstorage / check todo list is empty
  const localStorageTodos = useKillua(thunderTodos);

  return (
    <section className="minimal-scrollbar max-h-[390px]">
      {/* localstorage is ready ? get todos : loading */}
      {localStorageTodos.isReadyInSsr ? (
        <>
          {/* is todo in local storage ? render with map : show todo list is mepty */}
          {!localStorageTodos.selectors.isEmpty() ? (
            <>
              {localStorageTodos.thunder.map((item, index) => (
                <TodoItem key={item.id} todo={item} index={index} />
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 py-4">
              <Image
                width={150}
                src={imageTodoListIsEmpty}
                alt="todo list is empty"
              />
              <p className="font-medium">todo list is empty!</p>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image src={imageLoading} alt="loading" height={100} />
        </div>
      )}
    </section>
  );
}
