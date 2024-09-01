"use client";

import type { FC, ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";
import { CheckCircle, EditIcon, Trash2Icon } from "lucide-react";

export interface ToDoProps {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: ReactNode;
  description?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  onEdit: (id: ToDoProps["id"]) => void;
  onDelete: (id: ToDoProps["id"]) => void;
  onDone: (id: ToDoProps["id"]) => void;
  actions?: ReactNode[];
  isDone?: boolean;
  isDeleted?: boolean; //ToDo: to remove this prop as it would be handled by a db
}

const ToDo: FC<ToDoProps> = ({ id, title, description, content, footer, onEdit, onDelete, onDone, actions }) => {
  const defaultActions: ReactNode[] = [
    <Button onClick={() => onEdit?.(id)} key={1} size={"icon"} variant={"ghost"}>
      <CheckCircle className="size-5 text-green-500" />
    </Button>,
    <Button onClick={() => onDelete?.(id)} key={2} size={"icon"} variant={"ghost"}>
      <EditIcon className="size-5 text-primary" />
    </Button>,
    <Button onClick={() => onDone?.(id)} key={3} size={"icon"} variant={"ghost"}>
      <Trash2Icon className="size-5 text-red-500" />
    </Button>,
  ];

  const todoActions = actions ?? defaultActions;

  return (
    <Card className="h-max max-h-max relative">
      <span className="inline-flex gap-2 justify-center items-center absolute top-2 right-2">
        {todoActions.map((action) => action)}
      </span>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default ToDo;
