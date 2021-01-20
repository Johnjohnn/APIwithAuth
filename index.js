const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());
const port = 3000 

app.use(bodyParser.json())



app.use(bodyparer.urlencoded({
    extended:true,
}))


// GET Request to root URL (/)