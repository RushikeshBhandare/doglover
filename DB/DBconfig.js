const mongoose = require('mongoose')

require('dotenv').config()

const connect = () =>{
    mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }  
    ).then(()=>{
        console.log("MONGO DB CONNECTED")
    })
}

module.exports = connect
