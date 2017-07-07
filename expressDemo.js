const express = require('express')
const app = express()

app.get('/hotdog/:id/', (req, res) => {
  const params = req.params
  const query = req.query
  const responseBody = { params, query }
  res.send(responseBody)
})

app.post('/', (req, res) => {
  res.send('nice post')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
