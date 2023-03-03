var http = require('http');
const express = require ('express');
const userRoutes = require('./routes/userRoutes');
const apiRoutes = require('./routes/apiRoute');
require("dotenv").config();

const app = express();

const server = app.listen(process.env.PORT,()=>{
    console.log(`localhost is connected at ${process.env.PORT}`);
})


app.use('/api/postpic',apiRoutes);
// app.use(router);
