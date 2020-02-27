const express = require('express')
const app = express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('home is here')
})
app.get('/about',(req,res)=>{
    res.send('cool this is about us')
})
app.get('/singers',(req,res)=>{
    const singerlist ={
        first: 'zayn',
        second: 'harry',
        third:'adele',
        fourth:'justin'
    }
    res.send(JSON.stringify(singerlist))

})

app.get('/profile/:id',(req,res)=>{
    //res.send('profile page of ' +req.params.id)
    const data={
        age:29,
        job:"full stack",
        hobbies: ['photography','sketching']
    }
    res.render('profile',{person: req.params.username, data:data})
})

app.listen(7445)
console.log('this is cool server starting. . . . . ')