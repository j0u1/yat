export default function Todo({ todo, toggleTask, removeTask }) {
  return (
    <div
      key={todo.id}
      onClick={() => toggleTask(todo.id)}
      className="flex items-center gap-3.5 p-4 hover:bg-neutral-950 rounded-xl cursor-pointer group/list duration-500 transition-all"
    >
      <div
        className={`size-4 rounded-sm outline-2 outline-neutral-900 group-hover/list:outline-neutral-800 duration-500 transition-all ${todo.complete && "bg-green-500"}`}
      />
      <div className="flex justify-between items-center w-full relative">
        <p className="text-neutral-400 group-hover/list:text-white duration-500 transition-all group-hover/list">
          {todo.task}
        </p>
        <span
          className="relative top-1/2 size-3.5 opacity-0 group-hover/list:opacity-100 duration-500 transition-opacity"
          onClick={() => removeTask(todo.id)}
        >
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-500 rotate-45" />
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-500 -rotate-45" />
        </span>
      </div>
    </div>
  );
}
