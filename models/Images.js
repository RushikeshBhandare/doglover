const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    image:{
        type: Buffer,
        contentType: 'image/jpg'
    }
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image;