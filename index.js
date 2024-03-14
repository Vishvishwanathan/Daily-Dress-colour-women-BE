const express = require("express");
const cors = require('cors');
const bodyparser = require("body-parser");
const AppRouter = require('./routes/index');
const database = require("./models/index.js")
require('dotenv').config();

const app = express();
app.use(bodyparser.json())
const PORT = 5000;
 console.log(`Server started at sucssesfully:${PORT}`)

// ENABLE CORS
app.use(cors());

// Use the defined router for all routes
app.use('/', AppRouter);

app.listen(PORT, () => {
    console.log(`Server started at sucssesfully:${PORT}`)
});
