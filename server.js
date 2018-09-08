const express = require('express')
const app = express()
const dataContainer = require('./data.json')
var faker = require('faker')

// GENERATE FAKE DATA
const generateData = () => {
  for (let i = 0; i < 3; i++) {
    let dataSet = new Array()
    dataContainer.data.push(dataSet)
    for (let i = 0; i < 20; i++) {
      dataSet.push(
        faker.fake(
          '{{finance.accountName}}, {{finance.account}} {{finance.amount}}'
        )
      )
    }
  }
}

app.get('/data', (req, res) => {
  generateData()
  return res.status(200).json(dataContainer)
})

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/dist'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}

const port = process.env.PORT || 9001

app.listen(port, () => {
  process.stdout.write(`the server is available on ${port}`)
})
