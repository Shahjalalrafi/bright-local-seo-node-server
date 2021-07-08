const router = require('express').Router()
const Team = require('../Model/Teams')

router.get('/', async(req, res) => {
    try {   
        const teamData = Team.find()
        res.json(teamData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.posts('/', async (req, res) => {
    const teamDetails = new Team({
        greet: req.body.greet,
        name: req.body.name,
        position: req.body.position
    })
    try {
        const teamsData = await teamDetails.save()
        res.json(teamsData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

module.exports = router