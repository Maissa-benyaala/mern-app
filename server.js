const express = require('express');
const cors= require('cors');

const app = express();
const dbConnect = require('./DB_connect');
const dotenv = require('dotenv').config();

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/recipe", require("./routes/recipeRouter")); 

app.listen(process.env.PORT, err => {
    err ? console.log(err) : console.log("server is running successfully !")
});