const apis = (app)=>{

    const prifix = '/api'
    app.get(`${prifix}/register`,(req,res)=>{
        res.send("i am also working")
    })
}


module.exports = apis