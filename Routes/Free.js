const router = require('express').Router()
const Free = require('../Model/Free')

router.get('/', async (req, res) => {
    try {
        const freeData = await Free.find()
        res.json(freeData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const freeDetails = new Free({
        title: req.body.title,
        tags: req.body.tags
    })
    try {
        const freeData = await freeDetails.save()
        res.json(freeData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

module.exports = router