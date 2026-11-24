// module import
const express = require("express");
const path = require("path")
require('dotenv').config()

// create server
const app = express()

// read port
const PORT = Number(process.env.PORT) || 3000

app.get('/', (req, res) => {
    res.status(200)
    res.send("myWebBoard")
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', require('./routes/userRoutes'))

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on ${PORT}`)
})