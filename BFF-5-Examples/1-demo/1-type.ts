// 基本类型
const node: string = "Node.js";
const age: number = 25;
const isActive: boolean = true;
const hobbies: string[] = ["coding", "reading"];
const user: { name: string; age: number } = { name: "John", age: 30 };

// 联合类型
let id: string | number = "abc123";
id = 12345;

// 类型别名
type UserId = string | number;
type User = {
  id: UserId;
  name: string;
  email: string;
};

const newUser: User = {
  id: "id",
  name: "name",
  email: "email"
};

// 接口
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const stringResponse: ApiResponse<string> = {
  data: "string",
  status: 200,
  message: "message"
}
