const {resolve} = require("path")

const web = (app)=>{

    app.get('/',(req,res)=>{
        const homePath = resolve('~home/index.html')
        res.sendFile(homePath)
    })
}

module.exports = web