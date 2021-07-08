const router = require('express').Router()
const DoubleSection = require('../Model/DoubleSection')

router.get('/', async(req, res) => {
    try {
        const getDoubleData = await DoubleSection.find()
        res.json(getDoubleData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const doubleSection = new DoubleSection({
        heading: req.body.heading,
        title: req.body.title,
        list : req.body.list
    })
    try {
        const doubleSectionData = await doubleSection.save()
        res.json(doubleSectionData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

module.exports = router