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

app.get('../router/users.js', function(req, res){
    res.send("Hello from the 'test' URL");
});

// ENABLE CORS
app.use(cors());

// Use the defined router for all routes
app.use('/api', AppRouter);

app.listen(PORT, () => {
    console.log(`Server started at sucssesfully:${PORT}`)
});
