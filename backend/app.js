require("dotenv").config();
const express = require ('express');
const ifThreat = require('./routes/ifThreat')
const noThreat = require('./routes/noThreat')

const app = express();

// Calling the express.json() method for parsing
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: 1,
        message: "Welcome to Threat Detection Model"
    })
})

app.use('/ifThreat', ifThreat);
app.use('/noThreat', noThreat);


app.listen(process.env.PORT | 8080,() => {
    console.log(`localhost is connected at ${process.env.PORT}`);
})