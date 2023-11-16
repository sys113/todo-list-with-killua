import IconEdit from "@/assets/icons/edit.svg";
import IconTrash from "@/assets/icons/trash.svg";
import { TTodo } from "@/types/todo";

interface IProps {
  todo: TTodo;
  index: number;
}

export default function Todo(props: IProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-600 bg-slate-800">
      {/* head */}
      <div className="flex justify-between p-3.5">
        <p className="px-2">{props.index + 1}</p>
        <div className="todos-center flex gap-2">
          <button>
            <IconEdit />
          </button>
          <button>
            <IconTrash />
          </button>
        </div>
      </div>
      {/* body */}
      <div>
        {/* title */}
        <div className="relative border-t border-gray-600 p-3.5">
          <span className="title absolute -top-2 left-2 bg-slate-800 px-2">
            title
          </span>
          <p>{props.todo.title}</p>
        </div>
        {/* description */}
        <div className="relative border-t border-gray-600 p-3.5">
          <span className="title absolute -top-2 left-2 bg-slate-800 px-2">
            description
          </span>
          <p>{props.todo.description}</p>
        </div>
        {/* status */}
        <div className="relative border-t border-gray-600 p-3.5">
          <span className="title absolute -top-2 left-2 bg-slate-800 px-2">
            status
          </span>
          <p>{props.todo.status}</p>
        </div>
      </div>
    </div>
  );
}
