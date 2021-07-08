const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const headerRoutes = require('./Routes/Header')
const doubleSectionRoutes = require('./Routes/DoubleSection')
const freeSectionRoutes = require('./Routes/Free')

const app = express()
app.use(express.json())
app.use(cors())

const url = `mongodb+srv://myTodos:rafi1234@cluster0.fltsf.mongodb.net/brightLocal?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true ,useUnifiedTopology: true})
    .then(() => console.log('db connect'))
    .catch(err=> console.log(err))

app.use('/header', headerRoutes)
app.use('/doubleSection', doubleSectionRoutes)
app.use('/free', freeSectionRoutes)

app.listen(5000, () => {
    console.log('app listening from 5000')
})