import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'Add 1' },
    { id: 2, name: 'Add 2' },
    { id: 3, name: 'Add 3' },
  ])
})

app.listen(3333)