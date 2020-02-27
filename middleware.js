const express = require('express')
const app = express()
app.use((req,res,next)=>{
    console.log('time', Date.now())
    next()
})
app.listen(9999)
console.log('start server in time . . . . ')