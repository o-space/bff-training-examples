export interface Todo {
  id: number;
  title: string;
  description: string | null; // 允许为null
  completed: boolean;
  createdAt: Date;
}

// 用于创建Todo时请求体的类型
export interface CreateTodoInput {
  title: string;
  description?: string;
}

// 用于更新Todo时请求体的类型
export interface UpdateTodoInput {
  title?: string;
  description?: string;
  completed?: boolean;
}
