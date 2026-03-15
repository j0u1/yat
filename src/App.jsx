import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm.jsx";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      localStorage.setItem("todos", JSON.stringify([...todos, newItem]));
      setTodos([...todos, newItem]);
    }
  };

const removeTask = (id) => {
  const updatedTodos = todos.filter((todo) => todo.id !== id);

  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
};

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  return (
    <main className="flex items-center justify-center min-h-dvh">
      <div className="flex flex-col gap-4 w-xs">
        <div className="space-y-2">
          <h2 className="text-5xl font-medium">Список дел</h2>
          <p className="text-neutral-500">Очередной TODO-лист фронтендера</p>
        </div>
        <div className="w-full -ml-2.5 max-h-60">
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            );
          })}
          <TodoForm addTask={addTask} />
        </div>
      </div>
    </main>
  );
}
