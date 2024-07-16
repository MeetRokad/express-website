const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/view/home.html');
  })

  app.get('/About', (req, res) => {
    res.sendFile(__dirname + '/view/about.html');
  })

  app.get('/Contact', (req, res) => {
    res.sendFile(__dirname + '/view/contact.html');
  })

  app.get('/Cake', (req, res) => {
    res.send('Hello Cake!')
  })

  app.get('/Cake/Ahmedabad', (req, res) => {
    res.send('Hello Ahmedabad Cake!')
  })

  app.get('/Cake/Surat', (req, res) => {
    res.send('Hello Surat Cake!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})