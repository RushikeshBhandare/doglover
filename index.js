const express = require('express')
const path = require('path')

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

if(process.env.NODE_ENV == "production"){
    //Set Static Folder
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`SERVER IS RUNING ON PORT :: ${port}`)
})
