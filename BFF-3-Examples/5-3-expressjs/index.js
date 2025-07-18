const express = require('express')
const port = 3000

const app = express()
app.use(express.json());

app.post('/echo', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})
