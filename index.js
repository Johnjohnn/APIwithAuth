const express = require("express");
const bodyParser=require("body-parser")
const app = express();
//const Joi = require("joi");
app.use(express.json());
const port = 3000 

app.use(bodyParser.json())



app.use(bodyParser.urlencoded({
    extended:true,
}))


// GET Request to root URL (/)
app.get("/", (req, res) =>{
    res.json({Welcome:"how to create API with node.js , EXPRESS and postgresSQL"})
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})