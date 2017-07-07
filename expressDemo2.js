const express = require('express')
const app = express()
const { filter, pathOr, slice, compose } = require('ramda')

const hotdogs = [
  { id: 1, name: 'everything', toppings: 'all', cost: 6 },
  { id: 2, name: 'corndog', toppings: 'none', cost: 4.5 },
  { id: 2, name: 'corndog', toppings: 'none', cost: 4.5 },
  { id: 2, name: 'corndog', toppings: 'none', cost: 4.5 },
  { id: 3, name: 'chillidog', toppings: 'chilli', cost: 5.5 }
]

const filterByName = name => list => {
  if (name != null) return filter(hd => hd.name === name, list)
  return list
}

const limitResults = limit => list => {
  if (limit != null) return slice(0, limit, list)
  return list
}

app.get('/hotdogs', (req, res) => {
  const isFilter = pathOr(null, ['query', 'name'], req)
  const isLimit = pathOr(null, ['query', 'limit'], req)
  compose(out => res.send(out), limitResults(isLimit), filterByName(isFilter))(
    hotdogs
  )
})

app.get('/hotdogs/lessthan/:price', (req, res) => {
  const isFilter = pathOr(null, ['params', 'price'], req)
  if (isFilter != null) {
    res.send(filter(hd => hd.cost < isFilter, hotdogs))
  } else {
    res.send(hotdogs)
  }
})

app.listen(4000, () => {
  console.log('API is running on port 4000')
})
