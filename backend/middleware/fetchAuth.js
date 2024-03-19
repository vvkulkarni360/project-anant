const fetchAuth=(req , res, next) => {
    try{
        res.send({success:"Auth Done"})
        next()
    }
    catch(err){
        console.error(err)
        res.send({error:"Middleware problem"})
    }
}

module.exports = fetchAuth