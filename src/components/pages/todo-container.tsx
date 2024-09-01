import type { FC } from "react";
import ThemeSwitcher from "../ui/theme-switcher";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusCircleIcon } from "lucide-react";
import type { ToDoProps } from "./todo";
import { generateRandomToDoList } from "@/lib/utils";
import TodoList from "./todo-list";
import { Separator } from "../ui/separator";

const ToDoContainer: FC = () => {
  const todos = generateRandomToDoList(10) as ToDoProps[];

  return (
    <div className="size-full flex justify-center items-center">
      <div className="border md:mx-auto h-full w-1/2 flex flex-col gap-4 py-4 relative">
        <span className="absolute top-2 right-2">
          <ThemeSwitcher />
        </span>

        <h1 className="scroll-m-20 text-4xl tracking-tight text-center">TuDo App</h1>

        <section className="inline-flex w-full items-center px-4 gap-2">
          <Input type="email" placeholder="Search todos ..." />
          <Button className="inline-flex items-center gap-2">
            <PlusCircleIcon className="size-5" /> Add TuDo
          </Button>
        </section>

        <Separator />

        <section className="size-full overflow-auto px-4">
          <TodoList todos={todos} />
        </section>
      </div>
    </div>
  );
};

export default ToDoContainer;
