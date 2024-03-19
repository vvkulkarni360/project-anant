const express=require('express')
var cors = require('cors')

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.use('/api/fetchData',require('./routes/fetchDetails'))

app.listen(port,() => {
    console.log(`Connected to backend ${port}`)
})
