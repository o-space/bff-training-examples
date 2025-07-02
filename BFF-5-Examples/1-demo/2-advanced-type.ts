// 泛型
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("1"))

// 条件类型
// type NonNullable<T> = T extends null | undefined ? never : T;

// 映射类型
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// 工具类型
type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>; // 所有属性变为可选
type PickUser = Pick<User, "name" | "email">; // 选择特定属性
type OmitUser = Omit<User, "id">; // 排除特定属性

const paUser: PartialUser = {
  id: 123
}

const piUser: PickUser = {
  name: "name",
  email: "email"
}

const oUser: OmitUser = {
  name: "name",
  email: "email"
}
