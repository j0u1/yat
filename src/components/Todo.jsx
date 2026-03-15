export default function Todo({ todo, toggleTask, removeTask }) {
  return (
    <div
      key={todo.id}
      onClick={() => toggleTask(todo.id)}
      className="flex items-center gap-3.5 p-4 hover:bg-neutral-950 rounded-xl cursor-pointer group/list duration-500 transition-all"
    >
      <div
        className={`flex items-center justify-center size-4 rounded-sm outline-2 duration-500 transition-all shrink-0 outline-neutral-900 ${todo.complete && "group-hover/list:outline-neutral-800"}`}
      >
        <div
          className={`size-2.5 rounded-xs transition-all duration-300 ${todo.complete ? "scale-100 bg-neutral-700" : "scale-0 group-hover/list:scale-75 bg-neutral-500"}`}
        />
      </div>
      <div className="flex justify-between items-center w-full relative">
        <p className="text-neutral-400 group-hover/list:text-white duration-500 transition-all group-hover/list">
          {todo.task}
        </p>
        <button
          className="relative top-1/2 size-3.5 duration-300 transition-all shrink-0 scale-0 group-hover/list:scale-100 group/remove cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            removeTask(todo.id);
          }}
        >
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-700 rotate-45 group-hover/remove:bg-neutral-600 duration-300 transition-colors" />
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-700 -rotate-45 group-hover/remove:bg-neutral-600 duration-300 transition-colors" />
        </button>
      </div>
    </div>
  );
}
