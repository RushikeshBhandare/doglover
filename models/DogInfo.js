const mongoose = require('mongoose')

const DogInfoSchema = new mongoose.Schema({
    image:{
        type: Buffer,
        required: true
    },
    name :{
        type: String,
        required: true,
        unique: true
    },
    information:{
        type: String,
        require: true,
    },
    size:{
        type: String,
        required: true
    },
    malediet:{
        type: String,
        require: true
    },
    femalediet:{
        type: String,
        required: true
    },
    oneYearMaintainCostMale:{
        type: String,
        required: true
    },
    oneYearMaintainCostFemale:{
        type: String,
        required: true
    },
    femailMatingSeason :{
        type: String,
        required: true
    },
    birthCount:{
        type: Number,
        required: true
    },
    care:{
        type: String,
        required: true
    },
    ailments:{
        type: String,
        required: true
    },
    vacccination:{
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    }
    
},{
    timestamps: true
})

const DogInfo = mongoose.model('DogInfo', DogInfoSchema)

module.exports = DogInfo;