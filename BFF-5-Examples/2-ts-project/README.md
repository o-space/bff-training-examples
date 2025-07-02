## Commands

```shell
# 创建项目目录
mkdir ts-project
cd ts-project

# 初始化package.json
yarn init -y
# 安装TypeScript相关依赖
yarn add typescript @types/node ts-node -D
# 初始化TypeScript配置
npx tsc --init
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",           // 编译目标版本
    "module": "commonjs",         // 模块系统
    "lib": ["ES2020"],           // 包含的库
    "outDir": "./dist",          // 输出目录
    "rootDir": "./src",          // 源码目录
    "strict": true,              // 严格模式
    "esModuleInterop": true,     // ES模块互操作性
    "skipLibCheck": true,        // 跳过库文件检查
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,   // 解析JSON模块
    "declaration": true,         // 生成声明文件
    "sourceMap": true            // 生成源码映射
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist"
  ]
}
```

## package.json

```json
// package.json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts",
    "dev:watch": "ts-node --watch src/index.ts"
  }
}
```

## express

```shell
yarn add express
yarn add @types/express -D

yarn start

curl -H "Content-Type: application/json" -X POST http://localhost:3000/todos -d '{"title": "111", "description": "123"}'
```

## practices

- update todo
- delete todo
- read todo / todos
