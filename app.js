const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
require('dotenv').config()


app.use(cors())
app.use(express.static('public'))

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/public/index.html')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/services',(req,res)=>{
    res.render('services')
})

app.get('/contacts',(req,res)=>{
    res.render('contacts')
})
app.listen(port,()=>{
    console.log(`Server at : http://localhost:${port}`)
})