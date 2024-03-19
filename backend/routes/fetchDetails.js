const express = require('express')
const router = express.Router()
const fetchAuth = require('../middleware/fetchAuth')

router.get('/fetchData',fetchAuth,async(req,res)=>{
    try{
        console.log("Hello")
        res.send({success:"fetchData"})
    }
    catch(err){
        console.error(err)
        res.send({error:"FetchData problem"})
    }
})

module.exports=router