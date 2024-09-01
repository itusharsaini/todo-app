import type { ToDoProps } from "@/components/pages/todo";
import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomToDoList = (count: number): Omit<ToDoProps, "onEdit" | "onDelete" | "onDone">[] => {
  const todos: Omit<ToDoProps, "onEdit" | "onDelete" | "onDone">[] = [];

  for (let i = 0; i < count; i++) {
    const date = dayjs().add(i, "D").toDate();
    todos.push({
      id: `todo-${i + 1}`,
      createdAt: date,
      updatedAt: date,
      title: `Task ${i + 1}`,
      description: Math.random() > 0.5 ? `This is a description for task ${i + 1}.` : undefined,
      content: `Content for task ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      footer: Math.random() > 0.5 ? `Footer info for task ${i + 1}` : undefined,
    });
  }

  return todos;
};
