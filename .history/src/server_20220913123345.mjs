import express from 'express'

const app = express()

app.get('/ads', () => {
  console.log('accessed ads')
})

app.listen(3333)