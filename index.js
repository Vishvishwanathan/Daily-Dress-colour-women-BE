const express = require("express");
const cors = require('cors');
const bodyparser = require("body-parser");
const AppRouter = require('./routes/index');
require('dotenv').config();

const app = express();
app.use(bodyparser.json())
const PORT = 5000;


// ENABLE CORS
app.use(cors());

// Use the defined router for all routes
app.use('/api', AppRouter);

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server started at sucssesfully:${PORT}`)
});
