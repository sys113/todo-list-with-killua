"use client";

import Todo from "@/components/todo";
import Image from "next/image";
import { useKillua } from "killua";
import { thunderTodos } from "@/thunders/todo";
import imageTodoListIsEmpty from "@/assets/images/todolist-is-empty.png";
import imageLoading from "@/assets/images/loading.gif";

export default function Home() {
  // get todos from localstorage / check todo list is empty
  const localStorageTodos = useKillua(thunderTodos);

  return (
    <main className={`minimal-scrollbar max-h-[390px] space-y-4`}>
      {/* localstorage is ready ? get todos : loading */}
      {localStorageTodos.isReadyInSsr ? (
        <>
          {/* is todo in local storage ? render with map : show todo list is mepty */}
          {!localStorageTodos.selectors.isEmpty() ? (
            <>
              {localStorageTodos.thunder.map((item, index) => (
                <Todo key={item.id} todo={item} index={index} />
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
    </main>
  );
}
