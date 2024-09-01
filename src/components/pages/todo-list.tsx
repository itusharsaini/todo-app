import type { FC } from "react";
import type { ToDoProps } from "./todo";
import Todo from "./todo";
import { CircleHelpIcon } from "lucide-react";

interface TodoListProps {
  todos: ToDoProps[];
}

const EmptyState = () => (
  <div className="flex flex-col size-full items-center gap-2 justify-center px-4">
    <CircleHelpIcon className="size-10 text-blue-500" />
    <h1 className="font-medium text-xl">No TuDos Found !</h1>
    <p className="text-muted-foreground text-wrap">Start TuDo-ing and by clicking the "Add TuDo" button above.</p>
  </div>
);

const TodoList: FC<TodoListProps> = ({ todos }) => {
  if (!todos.length) return <EmptyState />;

  return (
    <ul className="list-none flex gap-4 flex-col">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo {...todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
