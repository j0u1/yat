import { useState } from "react";

export default function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-3.75 p-4 hover:bg-neutral-950 rounded-xl cursor-pointer group/list duration-500 transition-all">
        <button
          type="submit"
          className="relative top-1/2 size-3.5 duration-500 transition-all shrink-0 group/add cursor-pointer"
        >
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-700 group-hover/add:bg-neutral-600 duration-300 transition-colors" />
          <div className="absolute top-0 left-1.25 w-0.5 h-3.5 bg-neutral-700 rotate-90 group-hover/add:bg-neutral-600 duration-300 transition-colors" />
        </button>
        <input
          placeholder="Сюда текст"
          value={userInput}
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          className="text-neutral-400 group-hover/list:text-white duration-500 transition-all group-hover/list outline-0 w-full"
        />
      </div>
    </form>
  );
}
