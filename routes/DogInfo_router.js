const router = require('express').Router()
const DogInfo = require('../models/DogInfo')
const multer = require('multer')
const Images = require('../models/Images')

router.get('/all', async(req, res)=>{
    try{
        const data = await DogInfo.find()
        res.send(data)
    }catch (error){
        res.status.send(error)
    }


    res.send("hello its all Working ")
})

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

router.post('/up', upload.single('upload'), async(req,res)=>{
    try{
        console.log("Uploading The Image ")
        const img = new Images({image: req.file.buffer})
        await img.save()
        console.log("Image get uploaded")
        res.send('Uploaded')
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }

})

router.get('/image/:id', async (req, res) => {
    try {
        const user = await DogInfo.findById(req.params.id)

        if (!user || !user.image) {
            throw new Error()
        }

        res.set('Content-Type', 'image/jpg')
        res.send(user.image)
    } catch (e) {
        console.log(error)
        res.status(404).send()
    }
})

router.post('/add', upload.single("image"), async(req, res)=>{
    try{   
        console.log(req.file.buffer) 
        const data = {
        image : req.file.buffer,
        name : req.body.name,
        information: req.body.information,
        size: req.body.size,
        malediet: req.body.malediet,
        femalediet: req.body.femalediet,
        oneYearMaintainCostMale: req.body.oneYearMaintainCostMale,
        oneYearMaintainCostFemale: req.body.oneYearMaintainCostFemale,
        femailMatingSeason: req.body.femailMatingSeason,
        birthCount: req.body.birthCount,
        care: req.body.care,
        ailments: req.body.ailments,
        vacccination: req.body.vacccination,
        price : req.body.price
        }

        const addDogInfo = new DogInfo(data)

        const responce = await addDogInfo.save()

        res.send(responce)

    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

module.exports = router