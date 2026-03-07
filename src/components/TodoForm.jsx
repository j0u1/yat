import { useState } from "react";

export default function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex items-center gap-3.5 p-4 hover:bg-neutral-950 rounded-xl cursor-pointer group/list duration-500 transition-all">
        <div className="relative size-4">
          <div className="absolute top-1.75 left-0 -translate-y-1/2 w-0.5 h-4 bg-neutral-900 group-hover/list:bg-neutral-800 duration-500 transition-all" />
          <div className="absolute top-1.75 left-px -translate-x-1/2 w-4 h-0.5 bg-neutral-900 group-hover/list:bg-neutral-800 duration-500 transition-all" />
        </div>
        <input
          placeholder="Сюда текст"
          value={userInput}
          type="text"
          onChange={handleChange}
          className="text-neutral-400 group-hover/list:text-white duration-500 transition-all group-hover/list outline-0 w-full"
        />
      </div>
    </form>
  );
}
