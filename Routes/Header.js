const router = require('express').Router()
const Header = require('../Model/HeaderModel')

router.get('/', async (req, res) => {
    try {
        const headerData = await Header.find()
        res.json(headerData)
    }catch(err) {
        res.json({
            message: err.message
        })
    }
})

router.post('/', async (req, res) => {
    const header = new Header({
        header: req.body.header,
        title: req.body.title,
        description: req.body.description
    })

   header.save()
   .then(result=> {
       console.log(result)
       res.status(200).json({
           message: "header created"
       })
   })
   .catch(err => {
       res.json({
           message: err.message
       })
   })
})

module.exports = router