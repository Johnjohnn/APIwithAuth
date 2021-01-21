const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// GET Request to root URL (/)
// app.get('/', (request, response) => {
//   response.json({Welcome: `welcome ${process.env.COHORT}`,
//    fact: process.env.FUN_FACT})
// })
app.get("/", (req, res)=>{
    res.status(200).json({
        message:`Welcome ${process.env.COHORT}`,
        fact: process.env.FUN_FACT || "i have no fun facts"
    })
})
// Endpoints

app.get('/countries', db.getCountries)
app.get('/countries/:id', db.getCountryById)
app.post('/countries', db.createCountry)
app.put('/countries/:id', db.updateCountry)
app.delete('/countries/:id', db.deleteCountry)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
