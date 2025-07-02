import { Request, Response } from "express";
import { Todo, CreateTodoInput, UpdateTodoInput } from "../types/todo";

// 内存数据库
let todos: Todo[] = [];
let nextId = 1;

export const createTodo = (
  req: Request<{}, {}, CreateTodoInput>, // 请求体类型
  res: Response<Todo> // 响应体类型
) => {
  const { title, description } = req.body;

  const newTodo: Todo = {
    id: nextId++,
    title,
    description: description || null,
    completed: false,
    createdAt: new Date(),
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
};
