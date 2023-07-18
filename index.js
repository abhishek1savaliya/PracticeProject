const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const app = express();
const routes = require('./route')
app.use(express.json());
app.use(cors());

app.use('/employees',routes)
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
