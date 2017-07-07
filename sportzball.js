const express = require('express')
const app = express()
const { pathOr, filter } = require('ramda')

const teams = [
  {
    id: 'south-carolina-tigers',
    university: 'Clemson',
    teamNickName: 'Tigers',
    conf: 'ACC',
    div: 'Atlantic'
  },
  {
    id: 'alabama-crimson-tide',
    university: 'Alabama',
    teamNickName: 'Crimson Tide',
    conf: 'SEC',
    div: 'W'
  },
  {
    id: 'usc-trojans',
    university: 'USC',
    teamNickName: 'Trojans',
    conf: 'PAC-12',
    div: 'S'
  },
  {
    id: 'washington-huskies',
    university: 'Washington',
    teamNickName: 'Huskies',
    conf: 'PAC-12',
    div: 'N'
  },
  {
    id: 'oklahoma-sooners',
    university: 'Oklahoma',
    teamNickName: 'Sooners',
    conf: 'BIG 12',
    div: null
  },
  {
    id: 'ohio-state-buckeyes',
    university: 'Ohio State',
    teamNickName: 'Buckeyes',
    conf: 'Big Ten',
    div: 'E'
  },
  {
    id: 'penn-state-nittany-lions',
    university: 'Penn State',
    teamNickName: 'Nittany Lions',
    conf: 'Bit Ten',
    div: 'E'
  },
  {
    id: 'florida-state-seminoles',
    university: 'Florida State',
    teamNickName: 'Seminoles',
    conf: 'ACC',
    div: 'Atlantic'
  }
]

app.get('/teams', (req, res) => {
  const getConf = pathOr(null, ['query', 'conf'], req)
  if (getConf != null) {
    res.send(filter(team => team.conf === getConf, teams))
  } else {
    res.send(teams)
  }
})

app.get('/teams/:id', (req, res) => {
  const getID = pathOr(null, ['params', 'id'], req)
  if (getID != null) {
    res.send(filter(team => team.id === getID, teams))
  } else {
    res.send(teams)
  }
})

app.listen(4000, () => {
  console.log('API is running on port 4000')
})
