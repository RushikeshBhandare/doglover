const express = require('express')
const cors = require('cors')
require('dotenv').config()
var bodyParser = require('body-parser');

const connect = require('./DB/DBconfig')
const DongInfo_router = require('./routes/DogInfo_router')

//connect TO Database
connect();

const app = express()
app.use(express.json())
app.use(cors())
app.use('/dog', DongInfo_router)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`SERVER IS RUNING ON PORT :: ${port}`)
})
