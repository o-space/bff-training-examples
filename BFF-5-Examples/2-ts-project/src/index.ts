import express from 'express'
import { createTodo } from './controllers/todoController'

const port = 3000
const app = express()

app.use(express.json())

// https://expressjs.com/en/guide/routing.html
app.post("/todos", createTodo)

app.listen(port, () => {
    console.log(`Server started: ${port}`)
})
