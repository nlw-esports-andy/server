import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Add 1' },
    { id: 2, name: 'Add 2' },
    { id: 3, name: 'Add 3' },
  ])
})

app.listen(3333)