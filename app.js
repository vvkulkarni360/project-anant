const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
require('dotenv').config()


app.use(cors())
app.use(express.static('public'))



app.get('/',(req,res)=>{

    res.sendFile(__dirname+'/public/index.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+"/public/about.html")
})

app.listen(port,()=>{
    console.log(`Server at : http://localhost:${port}`)
})