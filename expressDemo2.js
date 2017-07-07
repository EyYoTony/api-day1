const express = require('express')
const app = express()

app.get('/hotdog/:number/:condiment/', (req, res) => {
  res.send(req.params)
})

app.listen(4000, () => {
  console.log('API is running on port 4000')
})
