# Steps

1. Setup repo

```bash
yarn init -y
yarn add @apollo/server graphql
npm pkg set type="module" # use es modules instead of commonjs
```

2. Update package.json

```json
{
  ...
  "scripts": {
    "start": "node index.js"
  }
  ...
}
```

3. Add source code

```bash
touch index.js
```
